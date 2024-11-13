<script>
	import { recorder, } from '@lib/recorder.svelte.js';
	import { status, name, } from '@/stores.js'
	import { get_time_string, gen_href, } from '@lib/u.js';
	import { _, } from 'svelte-i18n';

	// click to apply
	function click_record(e, index, data) {
		e.preventDefault();
		recorder.renew(index);
		recorder.save();
		status.set(data.status);
		name.set(data.name);
	}

	function add_record() {
		recorder.add({
			name: $name,
			status: $status,
		})
	}
</script>


<dl class="max-height:400px overflow:auto">
	{#each recorder.records as record, index}
		<dt class="$op:1:hover max-width:20em word-wrap:break-word word-break:break-all line-height:1.2 padding-left:1.5em text-indent:-1.5em">
			<button
				class="padding:0 border-color:#0000 line-height:0 background:unset cursor:pointer opacity:var(--op,.3) transition:opacity|.2s"
				title={$_('record.remove')}
				onclick={() => recorder.remove(index,
					$_('record.remove.confirm', { values: { name: record.name } })
				)}
			>
				🗑️
			</button>
			<a class="{record.name === $name && 'font:bolder'}"
				href={gen_href(record.status, record.name)}
				onclick={(e) => click_record(e, index, record)}
			>
				{record.name}
			</a>
		</dt>

		<dd class="font-size:smaller opacity:.5 font-family:monospace">
			<time datetime={new Date(record.time)}>
				{get_time_string(new Date(record.time))}
			</time>
			<!-- {record.status} -->
		</dd>
	{/each}
</dl>

<hr>
<div class="display:flex justify-content:space-between">
	<button class="color:#c00"
		onclick={() => recorder.reset($_('record.reset.accidentally.confirm'), $_('record.reset.confirm'))}
		>
		⚠️ {$_('record.reset')}
	</button>
	<button onclick={() => add_record()}>
		💾 {$_('record.save')}
	</button>
</div>
