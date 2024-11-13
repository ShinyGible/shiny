import {
	rev_sort_by,
	set_all_records,
	get_all_records,
} from '@lib/u.js';

export const recorder = await create_recorder();

async function create_recorder() {
	let cached_records = await get_all_records();
	// console.log(31, {cached_records});
	let records = $state(cached_records);

	function find_index_by_name(name = '') {
		return records.findIndex(i => i.name === name);
	}

	function sort_by_time() {
		records.sort(rev_sort_by('time'));
	}

	function add({name, status}) {
		let index = find_index_by_name(name);
		if (index === -1) {
			index = records.length;
		}

		records[index] = {
			name,
			status,
			time: +new Date(),
		};
		sort_by_time();
		save();
	}

	function remove(index = 0, alert_txt = '') {
		if (!alert_txt) {
			alert_txt = `【${records[index].name}】 will be deleted. \nAre you sure want to *DELETE* this record?`;
		}
		let cheked = confirm(alert_txt);
		if (!cheked) { return; }
		records.splice(index, 1);
		save();
	}

	function save() {
		set_all_records($state.snapshot(records));
	}

	function renew(index = 0) {
		records[index].time = +new Date();
		sort_by_time();
	}

	function set(data) {
		records = data;
	}

	function reset(alert_txt = '', alert_txt2 = '') {
		let is_accidentally = confirm(alert_txt);
		if (!is_accidentally) {
			let cheked = confirm(alert_txt2);
			if (!cheked) { return; }
			set([])
			save();
		}
	}

	return {
		get records() {
			return records;
		},
		add,
		renew,
		set,
		save,
		reset,
		remove,
	};
}
