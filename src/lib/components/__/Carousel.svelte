<script lang="ts">
	import clsx from 'clsx';
	import ButtonIcon from '$lib/components/_/ButtonIcon.svelte';
	import { Icon, ChevronRight, ChevronLeft } from 'svelte-hero-icons';

	export let items: string[] = ['/images/no-pict.jpg'];
	export let type: 'image' | 'video' = 'video';

	let wrapper: HTMLDivElement;
	let index = 0;

	function next() {
		if (index + 1 < items.length) {
			wrapper.scrollTo({
				left: wrapper.clientWidth * (index + 1),
				behavior: 'smooth'
			});
			index += 1;
		}
	}

	function prev() {
		if (index - 1 > -1) {
			wrapper.scrollTo({
				left: wrapper.clientWidth * (index - 1),
				behavior: 'smooth'
			});
			index -= 1;
		}
	}
</script>

<div class="relative w-full">
	{#if items.length > 1}
		<ButtonIcon
			class={clsx(
				'absolute right-4 top-1/2 -translate-y-1/2 bg-gray-200/50 h-12 w-12 hover:bg-gray-200/80',
				index === items.length - 1 && 'hidden'
			)}
			on:click={next}><Icon src={ChevronRight} /></ButtonIcon
		>
		<ButtonIcon
			class={clsx(
				'absolute left-4 top-1/2 -translate-y-1/2 bg-gray-200/50 h-12 w-12 hover:bg-gray-200/80',
				index === 0 && 'hidden'
			)}
			on:click={prev}><Icon src={ChevronLeft} /></ButtonIcon
		>
	{/if}
	<div
		class="flex w-full overflow-x-auto overflow-y-hidden no-scrollbar pointer-events-none"
		bind:this={wrapper}
	>
		{#each items as item, rowIndex (rowIndex)}
			<img
				class={type === 'video' ? 'aspect-video' : 'aspect-square object-cover min-w-full'}
				src={item}
				alt={`banner ${rowIndex}`}
			/>
		{/each}
	</div>
	{#if items.length > 1}
		<div class="absolute bottom-2 gap-2 flex left-1/2 -translate-x-1/2">
			{#each items as _, rowIndex (rowIndex)}
				<div
					class={clsx(
						'w-2.5 h-2.5 rounded-full',
						index === rowIndex ? 'bg-gray-700' : 'bg-gray-200'
					)}
				/>
			{/each}
		</div>
	{/if}
</div>
