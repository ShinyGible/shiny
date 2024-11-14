<script>
	import { _, locale } from 'svelte-i18n';

	import { name, status } from '@/stores.js';
	import { derived } from 'svelte/store';
	import { fetch_data, gen_href, } from '@lib/u.js';

	let url = $derived.by(() => gen_href($status, $name));

	let short_href = $state(null);

	let is_fetching = $state(false);
	async function gen_short_href() {
		if (is_fetching) {
			alert('');
			return;
		}

		is_fetching = true;

		const encoded_url = encodeURIComponent(`http://tinyurl.com/api-create.php?url=${url}`);

		short_href = await fetch_data(`https://corsproxy.io/?${encoded_url}`, 'text');
		// TODO: preview shorturl https://tinyurl.com/preview/ooxxoxox
		is_fetching = null;
	}

	function get_qrcode_img(url) {
    return `https://quickchart.io/qr?text=${url}&format=svg`;
	}
</script>



<div>
	{$_('share.intro')}

	<ul>
		<li>
			<a href={ url }>
				{$_('share.full.url')}
			</a>
		</li>

		<li>
			<a class="short-link text-decoration:"
				href={short_href}
				class:fetching={is_fetching}
				rel="noopener"
				target="_blank"
			>
				{$_('share.short.link')}
			</a>

			{#if short_href}
				<img class="display:block margin-top:2px" src={ get_qrcode_img(short_href) } alt="qrcode for short url">
			{/if}
		</li>
	</ul>
	<div class="text-align:right">
		<hr>
		<button onclick={gen_short_href}>📦 {$_('share.get.short.url')}</button>
	</div>
</div>



<style>
	li:has(a[href])::marker {
		content: '🔗 ';
	}

	li:has(a.fetching)::marker {
		content: '⌛ ';
	}

	.short-link[href]::after {
		content: attr(href) ' ✅';
		display: block;
		line-height: 1;
		/* font-size: smaller; */
		font-family: monospace;
	}

</style>