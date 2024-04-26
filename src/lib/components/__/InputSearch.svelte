<script lang="ts">
	import clsx from 'clsx';
	import InputField from '../_/InputField.svelte';
	import { clickOutside } from '$lib/utils/clickOutside';

	function handleInput(e: Event): void {
		filter = (e.target as HTMLInputElement).value;
	}

	function handleSelect(selection: any): void {
		selectOption(selection);
		filter = '';
	}

	function getHighlight(data: any): string {
		return data[filterKey].replace(
			new RegExp(`${filter}`, 'i'),
			(match: string) => `<span class="text-yellow-600">${match}</span>`
		);
	}

	export let error: string | undefined;
	export let filterKey: string;
	export let selectOption: (data: any) => void;
	export let options: Record<string, string>[] = [];

	let filter: string = '';

	$: filteredOptions = options.filter((data) =>
		data[filterKey as keyof typeof data].toLowerCase().includes(filter.toLowerCase())
	);
</script>

<InputField name="target_city" id="target_city" type="text" on:input={handleInput} {error} />
{#if filter.length}
	<ul
		class={clsx(
			'overflow-y-auto border absolute w-full z-10 bg-white',
			filter.length ? 'max-h-40 transition-[max-height] duration-300' : 'max-h-0'
		)}
		use:clickOutside={() => {
			filter = '';
		}}
	>
		{#each filteredOptions as data, index}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<li on:click={() => handleSelect(data)} class="p-2 hover:bg-gray-100 cursor-pointer">
				{@html getHighlight(data)}
			</li>
		{/each}
	</ul>
{/if}
