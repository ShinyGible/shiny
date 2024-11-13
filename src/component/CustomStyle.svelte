<script>
	import { _, locale, locales } from 'svelte-i18n';
	import { config, default_config } from '@/stores.js';

	function reset_main_colors() {
		$config.main_color = default_config.main_color;
		$config.main_bgc = default_config.main_bgc;
	}
	function reset_grid_colors() {
		$config.grid_colors = [...default_config.grid_colors];
	}
	function reset_gradient_colors() {
		$config.gradient_colors = [...default_config.gradient_colors];
	}
	function reset_data_source() {
		$config.source_url = {...default_config.source_url};
	}

	function reset_all_config() {
		$config = {...default_config};
	}

</script>

<div>
	<ul>

		<li data-marker="🎨" class="">
			<div class="display:flex gap:.5em justify-content:center align-items:end">
				<label>
					{$_('custom.main_color')}
					<br>
					<input type="color" bind:value={$config.main_color}>
				</label>
				<label>
					{$_('custom.main_bgc')}
					<br>
					<input type="color" bind:value={$config.main_bgc}>
				</label>
				<input type="reset" onclick={reset_main_colors} class="margin-left:auto">
			</div>

		</li>

		<hr>

		<li data-marker="↔" class="">
			{$_('custom.maxwidth')} /px
			<div class="display:flex gap:.5em align-items:center">
				<input type="range" class="width:10em" min="300" max="2000" bind:value={$config.maxwidth}>
				<input type="number" class="width:5em" min="300" max="2000" bind:value={$config.maxwidth}>
			</div>
		</li>

		<hr>

		<li data-marker="🎨" class="">
			<label class="display:flex">
				{$_('custom.grid_size')}：
				<input type="number" min="48" max="256" bind:value={$config.grid_size}>/px
			</label>

				{$_('custom.grid_color')}


				<div class="display:flex gap:.5em align-items:end">
					<label>
						{$_('custom.grid_color.thin')}
						<br>
						<input type="color" bind:value={$config.grid_colors[0]}>
					</label>

					<label>
						{$_('custom.grid_color.border')}
						<br>
						<input type="color" bind:value={$config.grid_colors[1]}>
					</label>

					<label>
						{$_('custom.grid_color.marker')}
						<br>
						<input type="color" bind:value={$config.grid_colors[2]}>
					</label>

					<input type="reset" onclick={reset_grid_colors} class="margin-left:auto">
				</div>
		</li>

		<hr>

		<li data-marker="🌌">
			{$_('custom.gradient_colors')}
			<div class="display:flex gap:.5em justify-content:center align-items:center">
				<input type="color" bind:value={$config.gradient_colors[0]}>
				<input type="color" bind:value={$config.gradient_colors[1]}>
				<input type="reset" onclick={reset_gradient_colors} class="margin-left:auto">
			</div>
		</li>

		<hr>

		<hr>

		<div class="display:flex">
			<button class="margin:auto" onclick={reset_all_config}>
				{$_('custom.reset_all_config')}
			</button>
		</div>
	</ul>
</div>


<style>
	li {
		margin-bottom: 1em;

		&::marker {
			content: attr(data-marker) ' ';
		}
	}

	input[type="color"] {
		width: 4em;
	}
</style>