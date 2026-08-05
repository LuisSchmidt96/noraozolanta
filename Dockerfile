# syntax=docker/dockerfile:1.7

FROM node:20-slim AS builder
WORKDIR /app

# enable corepack and prepare pnpm
RUN corepack enable && corepack prepare pnpm@9 --activate

# copy lockfile + package.json first (for caching)
COPY package.json pnpm-lock.yaml ./

# install deps using lockfile
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

# copy rest of code
COPY . .

# build the app
RUN pnpm build

# prune dev deps
RUN pnpm prune --prod

# ---- runtime stage ----
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# copy build and runtime deps
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY package.json pnpm-lock.yaml ./

CMD ["node", "build"]

