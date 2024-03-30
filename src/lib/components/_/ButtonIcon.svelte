<script lang="ts">
	import clsx from 'clsx';
</script>

<button
	on:click
	{...$$restProps}
	class={clsx(
		'flex p-1.5 items-center justify-center rounded-lg hover:bg-gray-100',
		$$restProps.class
	)}
>
	<slot />
</button>
