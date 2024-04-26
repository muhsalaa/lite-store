<script>
	import { Icon, ShoppingCart } from 'svelte-hero-icons';

	import { cart } from '$lib/store/cart';
	import ButtonIcon from '$lib/components/_/ButtonIcon.svelte';
</script>

<span class="relative">
	<ButtonIcon class="w-10 h-10" as="span">
		<Icon src={ShoppingCart} outline />
	</ButtonIcon>
	{#if $cart.length !== 0}
		<span
			class="absolute -top-0 -right-0 bg-red-500 font-semibold text-white text-xs rounded-full px-1"
			>{$cart.length}</span
		>
	{/if}
</span>
