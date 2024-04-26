<script lang="ts">
	import clsx from 'clsx';

	export let outline: boolean = false;
	export let as: string = 'button';
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={as}
	on:click
	{...$$restProps}
	class={clsx(
		'flex p-1.5 items-center justify-center rounded-lg hover:bg-gray-100 flex-shrink-0',
		outline && 'border border-gray-400',
		$$restProps.class
	)}
>
	<slot />
</svelte:element>
