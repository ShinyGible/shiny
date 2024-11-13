<script context="module">
	import List from '@comp/List.svelte';
	import Ctrl from '@comp/Ctrl.svelte';
	import Float_Btns from '@comp/Float_Btns.svelte';

	// import { pm_data, } from '@lib/pm.svelte.js';

	async function init() {
		// let pm_handler = await pm_data();
		return true;
	}

	function reset_ls() {
		localStorage.clear();
	}

</script>

{#await init()}
	Loading...

{:then}
	<Ctrl />
	<List />

	<Float_Btns />

{:catch error}
	GG!
	<button onclick={() => reset_ls()}>try to reset localStorage</button>

{/await}
