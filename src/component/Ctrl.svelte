<script>
	import Tag from '@comp/Tag.svelte';
	import Record from '@comp/Record.svelte';
	import Export from '@comp/Export.svelte';
	import Share from '@comp/Share.svelte';
	import Custom from '@comp/Custom.svelte';
	import CustomStyle from '@comp/CustomStyle.svelte';

	import { _, } from 'svelte-i18n';
	import { get_item, set_item, } from '@lib/u.js';

	let ctrl_visibility = $state(false);

	function toggle_ctrl() {
		ctrl_visibility = !ctrl_visibility;
	}
	const default_io = {
		record: true,
		share: false,
		export: false,
		filter: false,
		custom: false,
	};

	let io = $state(get_item('ctrl_io') || default_io);
	$effect(() => {
		set_item('ctrl_io', $state.snapshot(io));
	});

</script>

<aside class="ctrl hide-for-print" class:active={ ctrl_visibility }>
	<input type="checkbox" id="ctrl-checkbox" bind:checked={ctrl_visibility} class="sr-only-u" accesskey="c">
	<label class="ctrl-content-overlay" for="ctrl-checkbox"></label>

	<div class="ctrl-content">
		<!--
		<details bind:open={io.tag}>
			<summary>🔖 {$_('tag')}</summary>
			<div>
				<Tag />
			</div>
		</details>
		-->

		<details bind:open={io.record}>
			<summary>💾 {$_('record')}</summary>
			<div>
				<Record />
			</div>
		</details>

		<details bind:open={io.share}>
			<summary>🎁 {$_('share')}</summary>
			<div>
				<Share />
			</div>
		</details>

		<details bind:open={io.export}>
			<summary>📥 {$_('export')}</summary>
			<div>
				<Export />
			</div>
		</details>

		<details bind:open={io.custom_style}>
			<summary>🎨 {$_('custom.style')}</summary>
			<CustomStyle />
		</details>

		<details bind:open={io.custom}>
			<summary>🔧 {$_('custom')}</summary>
			<Custom />
		</details>
	</div>
</aside>


<style>

.ctrl {
	overscroll-behavior: none;
	font-size: smaller;
	--space-x: min(3vw, 1em);
}

:global(.ctrl summary + div) {
	padding-left: 1em;
	margin-top: 0.5em;
}

details {
	margin-bottom: .5em;
	padding: 0 0.5em .5em;

	&[open] {
		padding-bottom: 1em;
	}

	&:not([open]) summary::after {
		rotate: 0deg;
	}
}

summary {
	position: relative;
	padding: .5em 2em .5em .75em;
	margin-left: -1em;
	margin-right: -1em;
	background-color: #eee;
	background-color: var(--main-bgc);
	background-image: linear-gradient(#9993, #9993);
	cursor: pointer;

	details[open] & {
		margin-bottom: 0.25em;
	}

	&::before,
	&::after {
		content: '';
		position: absolute;
		top: 50%;
		translate: 0 -50%;
		right: 1em;
		width: 3px;
		height: 1em;
		background-color: #ccc;
		rotate: 90deg;
		transition: rotate .2s;
	}

	&::marker {
		content: '';
	}
}

.ctrl-content {
	position: fixed;
	z-index: 200;
	top: var(--space-x);
	left: var(--space-x);
	bottom: var(--space-x);
	background-color: var(--main-bgc);
	min-width: 250px;
	max-width: calc(100% - 2rem);
	overflow: auto;
	padding: 1em .5em 3em;
	box-shadow: 0 0 1em #0006;
	visibility: hidden;
	overscroll-behavior: none;

	line-height: 1.75;

	.ctrl.active & {
		visibility: visible;
	}

	& :global(hr) {
		border-color: #0000;
    border-top-color: #0000;
	  border-top: 2px dashed #0001;
	  max-width: 90%;
	}

	& :global(ul) {
		padding-left: 0;
	}
}

.ctrl-content-overlay {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	z-index: 100;
	width: min(3vw, 1em);
	background-color: #0006;
	opacity: 0.1;
	overscroll-behavior: none;

	.ctrl.active & {
		opacity: 1;
		width: 100%;
		backdrop-filter: blur(3px);
	}
}

</style>