<svelte:head>
	<title>Privātuma politika | Nora Ozolanta</title>
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<script lang="ts">
	import { onMount } from 'svelte';
	import AOS from 'aos';

	onMount(() => {
		AOS.init({ once: true, duration: 600, offset: 60 });
	});
</script>

<!-- Page header -->
<div class="bg-(--color-primary) py-16 px-4 text-white">
	<div class="mx-auto max-w-4xl" data-aos="fade-up">
		<p class="text-sm uppercase tracking-widest opacity-70 mb-3">Juridiskā informācija</p>
		<h1 class="font-bold tracking-tight" style="font-family: var(--heading-font-family); font-size: clamp(2rem, 5vw, 3rem);">
			Privacy Policy
		</h1>
		<p class="mt-3 opacity-70 text-sm">Last updated February 02, 2026</p>
	</div>
</div>

<div class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">

	<!-- Intro -->
	<div class="space-y-4 text-[15px] leading-7 text-gray-800" data-aos="fade-up">
		<p>
			This Privacy Notice for Nora Ozolanta ("we," "us," or "our"), describes how and why we might
			access, collect, store, use, and/or share ("process") your personal information when you use
			our services ("Services"), including when you:
		</p>
		<ul class="list-disc space-y-1 pl-6">
			<li>
				Visit our website at <a href="https://noraozolanta.com" class="policy-link">noraozolanta.com</a>
				or any website of ours that links to this Privacy Notice
			</li>
			<li>Engage with us in other related ways, including any marketing or events</li>
		</ul>
		<p>
			<span class="font-semibold">Questions or concerns?</span>
			Reading this Privacy Notice will help you understand your privacy rights and choices. If you
			still have questions, please contact us at
			<a href="mailto:contact@noraozolanta.com" class="policy-link">contact@noraozolanta.com</a>.
		</p>
	</div>

	<!-- Summary card -->
	<div
		class="mt-12 rounded-2xl bg-(--color-secondary)/20 border border-(--color-secondary)/40 p-8 space-y-4"
		data-aos="fade-up"
	>
		<h2 class="policy-heading">Summary of Key Points</h2>
		<p class="italic text-gray-600 text-sm">
			This summary provides key points from our Privacy Notice. Use the
			<a href="#toc" class="policy-link">table of contents</a> below to find the section you are
			looking for.
		</p>
		<div class="text-[15px] leading-7 text-gray-800 divide-y divide-gray-200">
			<p class="pb-3">
				<span class="font-semibold">What personal information do we process?</span>
				When you interact with our Services, we may process personal information. Learn more about
				<a href="#what-information-do-we-collect" class="policy-link">personal information you disclose to us</a>.
			</p>
			<p class="py-3">
				<span class="font-semibold">Do we process any sensitive personal information?</span>
				We do not process sensitive personal information.
			</p>
			<p class="py-3">
				<span class="font-semibold">Do we collect any information from third parties?</span>
				We do not collect any information from third parties.
			</p>
			<p class="py-3">
				<span class="font-semibold">How do we process your information?</span>
				We process your information to provide, improve, and administer our Services. Learn more about
				<a href="#how-do-we-process-your-information" class="policy-link">how we process your information</a>.
			</p>
			<p class="py-3">
				<span class="font-semibold">When and with whom do we share personal information?</span>
				We may share information in specific situations. Learn more about
				<a href="#when-and-with-whom-do-we-share-your-personal-information" class="policy-link">when and with whom we share your personal information</a>.
			</p>
			<p class="py-3">
				<span class="font-semibold">What are your rights?</span>
				Depending on your location, you may have certain rights regarding your personal information. Learn more about
				<a href="#what-are-your-privacy-rights" class="policy-link">your privacy rights</a>.
			</p>
			<p class="pt-3">
				<span class="font-semibold">How do you exercise your rights?</span>
				Submit a <a href="#how-can-you-review-update-or-delete-the-data-we-collect-from-you" class="policy-link">data subject access request</a>
				or contact us directly.
			</p>
		</div>
	</div>

	<!-- TOC -->
	<div class="mt-12 space-y-4" data-aos="fade-up">
		<h2 id="toc" class="policy-heading">Table of Contents</h2>
		<ol class="space-y-2 text-[15px] leading-7">
			{#each [
				['01', 'what-information-do-we-collect', 'What information do we collect?'],
				['02', 'how-do-we-process-your-information', 'How do we process your information?'],
				['03', 'what-legal-bases-do-we-rely-on-to-process-your-information', 'What legal bases do we rely on to process your information?'],
				['04', 'when-and-with-whom-do-we-share-your-personal-information', 'When and with whom do we share your personal information?'],
				['05', 'do-we-offer-artificial-intelligence-based-products', 'Do we offer artificial intelligence-based products?'],
				['06', 'how-long-do-we-keep-your-information', 'How long do we keep your information?'],
				['07', 'do-we-collect-information-from-minors', 'Do we collect information from minors?'],
				['08', 'what-are-your-privacy-rights', 'What are your privacy rights?'],
				['09', 'controls-for-do-not-track-features', 'Controls for do-not-track features'],
				['10', 'do-we-make-updates-to-this-notice', 'Do we make updates to this notice?'],
				['11', 'how-can-you-contact-us-about-this-notice', 'How can you contact us about this notice?'],
				['12', 'how-can-you-review-update-or-delete-the-data-we-collect-from-you', 'How can you review, update, or delete the data we collect from you?'],
			] as [num, id, label] (id)}
				<li class="flex gap-3 items-baseline">
					<span class="text-xs font-bold text-gray-400 w-5 shrink-0">{num}</span>
					<a href="#{id}" class="policy-link">{label}</a>
				</li>
			{/each}
		</ol>
	</div>

	<!-- 1 -->
	<div class="policy-section" id="what-information-do-we-collect" data-aos="fade-up">
		<div class="policy-section-number">01</div>
		<h2 class="policy-heading">What information do we collect?</h2>
		<h3 class="policy-subheading">Personal information you disclose to us</h3>
		<p class="policy-inshort"><span class="font-semibold">In Short:</span> We collect personal information that you provide to us.</p>
		<div class="space-y-3 text-[15px] leading-7 text-gray-800">
			<p>
				We collect personal information that you voluntarily provide when you express an interest in
				obtaining information about us or our Services, or otherwise when you contact us.
			</p>
			<p>
				<span class="font-semibold">Personal Information Provided by You.</span>
				The personal information we collect may include: names and email addresses.
			</p>
			<p><span class="font-semibold">Sensitive Information.</span> We do not process sensitive information.</p>
			<p>
				<span class="font-semibold">Payment Data.</span>
				All payment data is handled and stored by Stripe and TidyCal. You may find their privacy notices here:
				<a href="https://stripe.com/en-de/privacy" class="policy-link">stripe.com/privacy</a>
				and
				<a href="https://tidycal.com/privacy-policy" class="policy-link">tidycal.com/privacy-policy</a>.
			</p>
			<p>
				All personal information you provide must be true, complete, and accurate.
			</p>
			<h3 class="policy-subheading">Google API</h3>
			<p>
				Our use of information received from Google APIs will adhere to the
				<a href="https://developers.google.com/terms/api-services-user-data-policy" class="policy-link">Google API Services User Data Policy</a>,
				including the
				<a href="https://developers.google.com/terms/api-services-user-data-policy#limited-use" class="policy-link">Limited Use requirements</a>.
			</p>
		</div>
	</div>

	<!-- 2 -->
	<div class="policy-section" id="how-do-we-process-your-information" data-aos="fade-up">
		<div class="policy-section-number">02</div>
		<h2 class="policy-heading">How do we process your information?</h2>
		<p class="policy-inshort">
			<span class="font-semibold">In Short:</span>
			We process your information to provide, improve, and administer our Services, communicate with you,
			for security and fraud prevention, and to comply with law.
		</p>
		<div class="space-y-3 text-[15px] leading-7 text-gray-800">
			<p>We process your personal information for a variety of reasons, including:</p>
			<ul class="space-y-2 pl-2">
				{#each [
					['To deliver and facilitate delivery of services to the user.', 'We may process your information to provide you with the requested service.'],
					['To respond to user inquiries/offer support to users.', 'We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.'],
					['To send administrative information to you.', 'We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.'],
					['To fulfill and manage your orders.', 'We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.'],
					['To enable user-to-user communications.', 'We may process your information if you choose to use any of our offerings that allow for communication with another user.'],
					['To request feedback.', 'We may process your information when necessary to request feedback and to contact you about your use of our Services.'],
					['To send you marketing and promotional communications.', 'We may process the personal information you send to us for our marketing purposes. You can opt out of our marketing emails at any time.'],
					["To save or protect an individual's vital interest.", "We may process your information when necessary to save or protect an individual's vital interest, such as to prevent harm."],
				] as [title, desc] (title)}
					<li class="flex gap-3">
						<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-primary)"></span>
						<span><span class="font-semibold">{title}</span> {desc}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<!-- 3 -->
	<div class="policy-section" id="what-legal-bases-do-we-rely-on-to-process-your-information" data-aos="fade-up">
		<div class="policy-section-number">03</div>
		<h2 class="policy-heading">What legal bases do we rely on to process your information?</h2>
		<p class="policy-inshort">
			<span class="font-semibold">In Short:</span>
			We only process your personal information when we have a valid legal reason to do so under applicable law.
		</p>
		<div class="space-y-3 text-[15px] leading-7 text-gray-800">
			<p>
				The GDPR and UK GDPR require us to explain the valid legal bases we rely on. We may rely on
				the following legal bases:
			</p>
			<ul class="space-y-3 pl-2">
				{#each [
					['Consent.', 'We may process your information if you have given us permission for a specific purpose. You can withdraw your consent at any time.'],
					['Performance of a Contract.', 'We may process your personal information when necessary to fulfill our contractual obligations to you.'],
					['Legitimate Interests.', 'We may process your information when reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your fundamental rights.'],
					['Legal Obligations.', 'We may process your information where necessary for compliance with our legal obligations.'],
					["Vital Interests.", "We may process your information where necessary to protect your vital interests or the vital interests of a third party."],
				] as [title, desc] (title)}
					<li class="flex gap-3">
						<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-primary)"></span>
						<span><span class="font-semibold">{title}</span> {desc}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<!-- 4 -->
	<div class="policy-section" id="when-and-with-whom-do-we-share-your-personal-information" data-aos="fade-up">
		<div class="policy-section-number">04</div>
		<h2 class="policy-heading">When and with whom do we share your personal information?</h2>
		<p class="policy-inshort">
			<span class="font-semibold">In Short:</span>
			We may share information in specific situations described in this section.
		</p>
		<div class="space-y-3 text-[15px] leading-7 text-gray-800">
			<p>We may need to share your personal information in the following situations:</p>
			<ul class="space-y-3 pl-2">
				<li class="flex gap-3">
					<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-primary)"></span>
					<span><span class="font-semibold">Business Transfers.</span> We may share or transfer your information in connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</span>
				</li>
				<li class="flex gap-3">
					<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-primary)"></span>
					<span><span class="font-semibold">Other Users.</span> When you share personal information or interact with public areas of the Services, such information may be viewed by all users and publicly available outside the Services.</span>
				</li>
			</ul>
		</div>
	</div>

	<!-- 5 -->
	<div class="policy-section" id="do-we-offer-artificial-intelligence-based-products" data-aos="fade-up">
		<div class="policy-section-number">05</div>
		<h2 class="policy-heading">Do we offer artificial intelligence-based products?</h2>
		<p class="policy-inshort">
			<span class="font-semibold">In Short:</span>
			We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.
		</p>
		<div class="space-y-4 text-[15px] leading-7 text-gray-800">
			<p>
				As part of our Services, we offer AI-powered products and tools (collectively, "AI Products").
				The terms in this Privacy Notice govern your use of the AI Products within our Services.
			</p>
			<h3 class="policy-subheading">Use of AI Technologies</h3>
			<p>
				We provide AI Products through third-party providers including OpenAI. Your input, output, and
				personal information will be shared with and processed by these AI Service Providers. You must
				not use the AI Products in any way that violates the terms or policies of any AI Service Provider.
			</p>
			<h3 class="policy-subheading">Our AI Products</h3>
			<p>Our AI Products are designed for: text analysis, AI insights, AI automation, AI document generation, and natural language processing.</p>
			<h3 class="policy-subheading">How to Opt Out</h3>
			<p>To opt out, contact us using the contact information provided below.</p>
		</div>
	</div>

	<!-- 6 -->
	<div class="policy-section" id="how-long-do-we-keep-your-information" data-aos="fade-up">
		<div class="policy-section-number">06</div>
		<h2 class="policy-heading">How long do we keep your information?</h2>
		<p class="policy-inshort">
			<span class="font-semibold">In Short:</span>
			We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.
		</p>
		<div class="space-y-3 text-[15px] leading-7 text-gray-800">
			<p>
				We will only keep your personal information for as long as it is necessary for the purposes
				set out in this Privacy Notice, unless a longer retention period is required by law.
			</p>
			<p>
				When we have no ongoing legitimate business need to process your personal information, we
				will either delete or anonymize such information, or securely store it isolated from any
				further processing until deletion is possible.
			</p>
		</div>
	</div>

	<!-- 7 -->
	<div class="policy-section" id="do-we-collect-information-from-minors" data-aos="fade-up">
		<div class="policy-section-number">07</div>
		<h2 class="policy-heading">Do we collect information from minors?</h2>
		<p class="policy-inshort">
			<span class="font-semibold">In Short:</span>
			We do not knowingly collect data from or market to children under 18 years of age.
		</p>
		<div class="space-y-3 text-[15px] leading-7 text-gray-800">
			<p>
				We do not knowingly collect, solicit data from, or market to children under 18 years of age.
				By using the Services, you represent that you are at least 18.
			</p>
			<p>
				If we learn that personal information from users less than 18 years of age has been collected,
				we will deactivate the account and promptly delete such data from our records.
			</p>
			<p>
				If you become aware of any data we may have collected from children under age 18, please
				contact us at
				<a href="mailto:contact@noraozolanta.com" class="policy-link">contact@noraozolanta.com</a>.
			</p>
		</div>
	</div>

	<!-- 8 -->
	<div class="policy-section" id="what-are-your-privacy-rights" data-aos="fade-up">
		<div class="policy-section-number">08</div>
		<h2 class="policy-heading">What are your privacy rights?</h2>
		<p class="policy-inshort">
			<span class="font-semibold">In Short:</span>
			In some regions, such as the EEA, UK, and Switzerland, you have rights that allow you greater
			access to and control over your personal information.
		</p>
		<div class="space-y-4 text-[15px] leading-7 text-gray-800">
			<p>
				In these regions, your rights may include: (i) requesting access and obtaining a copy of your
				personal information, (ii) requesting rectification or erasure, (iii) restricting the
				processing of your personal information, (iv) data portability, and (v) not being subject to
				automated decision-making.
			</p>
			<p>
				You can make such a request by contacting us using the details in the section
				<a href="#how-can-you-contact-us-about-this-notice" class="policy-link">"How can you contact us about this notice?"</a>
				below.
			</p>
			<p>
				If you are in the EEA or UK and believe we are unlawfully processing your personal
				information, you have the right to complain to your
				<a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" class="policy-link" target="_blank" rel="noopener noreferrer">Member State data protection authority</a>
				or
				<a href="https://ico.org.uk/make-a-complaint/" class="policy-link" target="_blank" rel="noopener noreferrer">UK data protection authority</a>.
				If located in Switzerland, you may contact the
				<a href="https://www.edoeb.admin.ch/edoeb/en/home.html" class="policy-link" target="_blank" rel="noopener noreferrer">Federal Data Protection and Information Commissioner</a>.
			</p>
			<h3 class="policy-subheading">Withdrawing your consent</h3>
			<p>
				You can withdraw your consent at any time by contacting us using the details in the section
				<a href="#how-can-you-contact-us-about-this-notice" class="policy-link">"How can you contact us about this notice?"</a>
				below. Note that withdrawal does not affect the lawfulness of processing before its withdrawal.
			</p>
			<h3 class="policy-subheading">Opting out of marketing communications</h3>
			<p>
				You can unsubscribe at any time by clicking the unsubscribe link in our emails, or by
				contacting us using the details in the section
				<a href="#how-can-you-contact-us-about-this-notice" class="policy-link">"How can you contact us about this notice?"</a>
				below.
			</p>
			<p>
				Questions about your privacy rights? Email us at
				<a href="mailto:contact@noraozolanta.com" class="policy-link">contact@noraozolanta.com</a>.
			</p>
		</div>
	</div>

	<!-- 9 -->
	<div class="policy-section" id="controls-for-do-not-track-features" data-aos="fade-up">
		<div class="policy-section-number">09</div>
		<h2 class="policy-heading">Controls for do-not-track features</h2>
		<p class="text-[15px] leading-7 text-gray-800">
			Most web browsers include a Do-Not-Track ("DNT") feature you can activate to signal your
			privacy preference. At this stage, no uniform technology standard for recognizing and
			implementing DNT signals has been finalized. As such, we do not currently respond to DNT
			browser signals. If a standard is adopted that we must follow in the future, we will inform
			you about that practice in a revised version of this Privacy Notice.
		</p>
	</div>

	<!-- 10 -->
	<div class="policy-section" id="do-we-make-updates-to-this-notice" data-aos="fade-up">
		<div class="policy-section-number">10</div>
		<h2 class="policy-heading">Do we make updates to this notice?</h2>
		<p class="policy-inshort">
			<span class="font-semibold">In Short:</span>
			Yes, we will update this notice as necessary to stay compliant with relevant laws.
		</p>
		<p class="text-[15px] leading-7 text-gray-800">
			We may update this Privacy Notice from time to time. The updated version will be indicated by
			an updated "Revised" date at the top of this Privacy Notice. If we make material changes, we
			may notify you by prominently posting a notice or by directly sending you a notification. We
			encourage you to review this Privacy Notice frequently.
		</p>
	</div>

	<!-- 11 -->
	<div class="policy-section" id="how-can-you-contact-us-about-this-notice" data-aos="fade-up">
		<div class="policy-section-number">11</div>
		<h2 class="policy-heading">How can you contact us about this notice?</h2>
		<div class="space-y-4 text-[15px] leading-7 text-gray-800">
			<p>
				If you have questions or comments about this notice, you may email us at
				<a href="mailto:contact@noraozolanta.com" class="policy-link">contact@noraozolanta.com</a>
				or contact us by post at:
			</p>
			<div class="rounded-xl bg-gray-50 border border-gray-200 px-6 py-4 space-y-0.5 text-gray-700">
				<p class="font-semibold text-gray-900">Nora Ozolanta</p>
				<p>H&uuml;bschstra&szlig;e 15</p>
				<p>Karlsruhe, Baden-W&uuml;rttemberg 76135</p>
				<p>Germany</p>
			</div>
		</div>
	</div>

	<!-- 12 -->
	<div class="policy-section mb-16" id="how-can-you-review-update-or-delete-the-data-we-collect-from-you" data-aos="fade-up">
		<div class="policy-section-number">12</div>
		<h2 class="policy-heading">How can you review, update, or delete the data we collect from you?</h2>
		<p class="text-[15px] leading-7 text-gray-800">
			Based on the applicable laws of your country, you may have the right to request access to the
			personal information we collect from you, correct inaccuracies, or delete your personal
			information. To request to review, update, or delete your personal information, please contact
			us at <a href="mailto:contact@noraozolanta.com" class="policy-link">contact@noraozolanta.com</a>.
		</p>
		<p class="text-xs text-gray-400">
			This Privacy Policy was created using Termly's Privacy Policy Generator.
		</p>
	</div>

</div>