<script lang="ts">
	import Button from '$lib/components/_/Button.svelte';
	import ButtonIcon from '$lib/components/_/ButtonIcon.svelte';
	import SocialIcons from '$lib/components/_/SocialIcons.svelte';
	import Carousel from '$lib/components/__/Carousel.svelte';
	import ProductCard from '$lib/components/__/ProductCard.svelte';
	import { addProductToCart } from '$lib/store/cart';
	import { formatCurrency } from '$lib/utils/formatting';
	import { getDiscount } from '$lib/utils/math';
	import { ChatBubbleLeftEllipsis, Icon } from 'svelte-hero-icons';
	import type { ProductProps } from '$lib/types/product';
	import { showToast } from '$lib/store/toast.js';

	function addProduct(product: ProductProps) {
		addProductToCart(product);
		showToast({ content: 'Produk ditambahkan ke keranjang' });
	}

	export let data;
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
		<h2 class="font-bold mb-2 text-lg">Produk Terkait</h2>
		<div class="flex overflow-x-auto gap-4 max-h-64 w-full flex-nowrap">
			{#each data.related.products as product}
				<ProductCard data={product} />
			{/each}
		</div>
	</section>

	<section class="mt-3 bg-white px-4 py-3">
		<h2 class="font-bold mb-3">Beli Produk dari Marketplace</h2>
		<div class="flex flex-wrap gap-4 w-full">
			{#each data.product.marketplaces as marketplace}
				<a href={marketplace.link}>
					<SocialIcons name={marketplace.type} size={36} />
				</a>
			{/each}
		</div>
	</section>

	<section class="mt-3 sticky bottom-0 bg-white px-4 py-3 border-t">
		<div class="flex gap-2 w-full">
			<ButtonIcon class="h-10 w-10" outline>
				<Icon src={ChatBubbleLeftEllipsis} />
			</ButtonIcon>
			<Button outline block>Beli Sekarang</Button>
			<Button block on:click={() => addProduct(data.product)}>+ Keranjang</Button>
		</div>
	</section>
</div>
