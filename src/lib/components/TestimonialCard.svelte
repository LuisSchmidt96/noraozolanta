<div class="flex h-full flex-col gap-5 rounded-(--radius-card) border border-rule bg-paper p-8">
	<span class="quote-mark font-display" aria-hidden="true">&ldquo;</span>
	<slot></slot>
</div>

<style>
	.quote-mark {
		font-size: 3.5rem;
		line-height: 0.6;
		color: var(--color-accent-2);
		user-select: none;
	}
</style>
