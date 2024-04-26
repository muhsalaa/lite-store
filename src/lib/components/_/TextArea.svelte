<script lang="ts">
	import clsx from 'clsx';

	export let value: string = '';
	export let error: string = '';
</script>

<div>
	<textarea
		class={clsx(
			'block min-h-16 w-full rounded-md form-textarea focus:outline-offset-1 border',
			error
				? 'border-red-500 focus:outline-red-500/25 focus:border-red-500'
				: 'focus:border-cyan-500  border-black focus:outline-cyan-500/25'
		)}
		style="box-shadow: none"
		bind:value
		on:change
		on:input
		on:keydown
		autocomplete="off"
		{...$$restProps}
	/>

	{#if error}
		<p class="mt-1 text-xs text-red-500">
			{error}
		</p>
	{/if}
</div>
