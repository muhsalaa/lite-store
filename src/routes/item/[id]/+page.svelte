<script lang="ts">
	import Button from '$lib/components/_/Button.svelte';
	import ButtonIcon from '$lib/components/_/ButtonIcon.svelte';
	import SocialIcons from '$lib/components/_/SocialIcons.svelte';
	import Carousel from '$lib/components/__/Carousel.svelte';
	import ProductCard from '$lib/components/__/ProductCard.svelte';
	import { addProductToCart, cart, increaseProductQuantity } from '$lib/store/cart';
	import { formatCurrency } from '$lib/utils/formatting';
	import { getDiscount } from '$lib/utils/math';
	import { ChatBubbleLeftEllipsis, Icon } from 'svelte-hero-icons';
	import type { ProductProps } from '$lib/types/product';
	import { showToast } from '$lib/store/toast.js';
	import { goto } from '$app/navigation';
	import { checkoutProduct } from '$lib/store/checkout.js';
	import { config } from '$lib/store/config.js';

	export let data;
	const isOwnStore = data.product.type !== 'own_store';

	function addProduct(product: ProductProps) {
		addProductToCart(product);
		showToast({ content: 'Produk ditambahkan ke keranjang' });
	}

	function checkout(product: ProductProps) {
		const item = $cart.find((item) => item.id === product.id);
		if (item) {
			increaseProductQuantity(item.id);
			checkoutProduct([item]);
		} else {
			checkoutProduct([{ ...product, quantity: 1 }]);
		}

		goto('/checkout');
	}

	function chatStore(product: ProductProps) {
		const message = `Halo kak, saya ingin bertanya mengenai produk ${product.title}

${window.location.href}`;

		window.open(
			`https://wa.me/${$config.phone_number}?text=${encodeURIComponent(message)}`,
			'_blank'
		);
	}
</script>

<div class="bg-gray-100">
	<Carousel items={data.product.images} type="image" />
	<section class="bg-white">
		<hr />
		<div class="px-4 py-3">
			<p class="font-bold mb-1 text-xl">
				{formatCurrency(getDiscount(data.product.price, data.product.discount))}
			</p>
			<p class="text-xs">
				<span class="text-gray-400 line-through">{formatCurrency(data.product.price)}</span>
				<span class="font-bold text-pink-600">{data.product.discount}%</span>
			</p>
		</div>

		<hr />
		<div class="px-4 py-3">
			<h1 class="text-lg sm:text-xl text-ellipsis line-clamp-2">
				{data.product.title}
			</h1>
		</div>
	</section>
	<section class="mt-3 bg-white px-4 py-3">
		<h2 class="font-bold mb-2 text-lg">Deskripsi Produk</h2>
		<p class="mb-3">
			{data.product.description}
		</p>
	</section>

	<section class="mt-3 bg-white px-4 py-3">
		<h2 class="font-bold mb-2 text-lg">Detail Produk</h2>
		<div class="flex items-center justify-between mb-1">
			<p class="text-gray-400">Berat</p>
			<p>{data.product.weight} gram</p>
		</div>
		<div class="flex items-center justify-between mb-1">
			<p class="text-gray-400">Kondisi</p>
			<p>{data.product.condition}</p>
		</div>
		<div class="flex items-center justify-between mb-1">
			<p class="text-gray-400">Stok</p>
			<p>{data.product.stock}</p>
		</div>
		<div class="flex items-center justify-between mb-1">
			<p class="text-gray-400">Minimal pemesanan</p>
			<p>{data.product.min_order}</p>
		</div>
	</section>

	<section class="mt-3 bg-white px-4 py-3">
		<h2 class="font-bold mb-2 text-lg">Produk Terkait</h2>
		<div class="flex overflow-x-auto gap-4 max-h-64 w-full flex-nowrap">
			{#each data.related.products as product}
				<ProductCard data={product} />
			{/each}
		</div>
	</section>

	<section class="mt-3 bg-white px-4 py-3">
		<div class="mb-3">
			<h2 class="font-bold">Beli Produk dari Marketplace</h2>
			{#if !isOwnStore}
				<p class="text-xs italic text-gray-400">(hanya dapat dibeli di marketplace tertera)</p>
			{/if}
		</div>
		<div class="flex flex-wrap gap-4 w-full">
			{#each data.product.marketplaces as marketplace}
				<a href={marketplace.link}>
					<SocialIcons name={marketplace.type} size={36} />
				</a>
			{/each}
		</div>
	</section>

	{#if isOwnStore}
		<section class="mt-3 sticky bottom-0 bg-white px-4 py-3 border-t">
			<div class="flex gap-2 w-full">
				<ButtonIcon class="h-10 w-10" outline on:click={() => chatStore(data.product)}>
					<Icon src={ChatBubbleLeftEllipsis} />
				</ButtonIcon>
				<Button outline block on:click={() => checkout(data.product)}>Beli Sekarang</Button>
				<Button block on:click={() => addProduct(data.product)}>+ Keranjang</Button>
			</div>
		</section>
	{/if}
</div>
