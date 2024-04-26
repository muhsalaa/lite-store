<script lang="ts">
	import clsx from 'clsx';

	export let value: string = '';
	export let error: string = '';
</script>

<div>
	<div
		class={clsx(
			'relative h-11 w-full overflow-hidden rounded-md border focus-within:outline outline-offset-1 focus-within:outline-2',
			error
				? 'border-red-500 focus-within:outline-red-500/25'
				: 'focus-within:border-cyan-500 border-black focus-within:outline-cyan-500/25'
		)}
	>
		<input
			class="h-full w-full form-input border-none"
			bind:value
			on:change
			on:input
			on:keydown
			autocomplete="off"
			{...$$restProps}
		/>
	</div>

	{#if error}
		<p class="mt-1 text-xs text-red-500">
			{error}
		</p>
	{/if}
</div>
