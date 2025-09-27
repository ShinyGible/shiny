<script>
	import { _, } from 'svelte-i18n';

	let initFaceookLikeBtn = (() => {
		let executed = false;
		return () => {
			if (!executed) {
				executed = true;

				let js;
				let fjs = document.getElementsByTagName('script')[0];
				if (document.getElementById('facebook-jssdk')) {return;}
				js = document.createElement('script');
				js.id = 'facebook-jssdk';
				js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0';
				fjs.parentNode.insertBefore(js, fjs);
			}
		};
	})();
</script>


<footer class="font-family:serif font-size:smaller flex flex-direction:row-reverse padding:1em hide-for-print">

	<ul class="margin-bottom:.5em>li list-style:disc">
		<li>
			Print to save that. <button onclick={() => window.print()}>🖨️</button>
		</li>
		<li>
			most images from: <a href="https://github.com/ZeChrales/PogoAssets" target="_blank" rel="noopener">PogoAssets</a> repo.
		</li>
		<li>
			design style from: <a href="https://leekduck.com/" target="_blank" rel="noopener">Leek Duck</a>
		</li>
		<li>
			report an issue on <a href="https://github.com/rplus/pokemongo-shiny/" target="_blank" rel="noopener">GitHub repo</a>
			<br>
			or add a new shiny one?
		</li>
		<li>
			<details class="fb-like-details">
				<summary onclick={ initFaceookLikeBtn }>
					Give a 👍️ with Facebook?
				</summary>
				<div class="fb-like"
					data-href="https://rplus.github.io/Pokemon-shiny/"
					data-layout="button_count"
					data-action="like"
					data-share="true">
				</div>
			</details>
		</li>
	</ul>
</footer>
