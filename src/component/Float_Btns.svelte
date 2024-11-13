<script>
	import { status, name, } from '@/stores.js'
	import { recorder, } from '@lib/recorder.svelte.js';
	import { _, } from 'svelte-i18n';

	function add_record() {
		recorder.add({
			name: $name,
			status: $status,
		});
	}
</script>

<label class="btn-icon ctrl-btn bottom:1rem hide-for-print" for="ctrl-checkbox">
	⚙️
	<span class="sr-only">
		toggle control panel
	</span>
</label>


<button class="btn-icon record-btn bottom:3rem hide-for-print"
	onclick={() => add_record()}
	title={$_('record.save')}
	accesskey="s"
>
	💾
	<span class="sr-only">
		Save current record
	</span>
</button>

<label class="btn-icon locker-btn bottom:5rem hide-for-print" for="list-locker">
	<span class="sr-only">
		Lock
	</span>
</label>



<style>

	.record-btn {
		left: 3em;
	}

	.locker-btn {
		&::before {
			content: var(--locker-icon, '🔓');
		}

		:global(body:has(#list-locker:checked)) & {
			background-color: #ffd;
			--locker-icon:  '🔒';
		}
	}

	.btn-icon {
		position: fixed;
		z-index: 30;
		/* bottom: .5rem; */
		left: calc(min(3vw, 1em) + 4px);
		border: 1px outset #0006;
		display: flex;
		width: 2em;
		height: 2em;
		padding: 0;
		place-items: center;
		place-content: center;
		font-size: .8rem;
		background-color: #f4f4f4;
		cursor: pointer;
		user-select: none;
		border-radius: 2px;
		transition: opacity 0.3s, scale .1s;

		&:hover,
		&:focus,
		&.active,
		&:active {
			opacity: 1;
			scale: 1.1;
		}

		&.active,
		&:active {
			border-style: inset;
			background-color: #ffd;
		}
	}
</style>