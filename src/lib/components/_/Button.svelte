<script lang="ts">
	import clsx from 'clsx';

	export let outline: boolean = false;
	export let block: boolean = false;
</script>

<button
	on:click
	{...$$restProps}
	class={clsx(
		'flex px-2 py-1 items-center justify-center rounded-lg ',
		'font-bold',
		outline
			? 'border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white'
			: 'bg-cyan-600 hover:bg-cyan-700 text-white',
		block && 'w-full block',
		$$restProps.class
	)}
>
	<slot />
</button>
