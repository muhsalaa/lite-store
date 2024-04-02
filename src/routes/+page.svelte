<script lang="ts">
	import Carousel from '$lib/components/__/Carousel.svelte';
	import Pagination from '$lib/components/__/Pagination.svelte';
	import Productcard from '$lib/components/__/ProductCard.svelte';
	import { PAGINATION_DEFAULT } from '$lib/constants/numbers.js';

	const images = [
		'https://lelogama.go-jek.com/post_featured_image/jaringan-prima-promo_blog-header_720.jpg',
		'https://d2v6npc8wmnkqk.cloudfront.net/storage/11331/conversions/Header-Blog-GoPay-Promo-Game-seo_image_large.jpg',
		'https://news.codashop.com/id/wp-content/uploads/sites/4/2022/10/Gopay_Blog.jpg',
		'https://foto.kontan.co.id/2CosVjMLjJGrGXt7bOqoAkXrAP0=/smart/2021/12/09/1533324503p.jpg'
	];

	export let data;
</script>

<div>
	<Carousel items={images} />
	{#if data.products.length}
		<div class="flex items-center justify-between px-3 mt-3">
			<h1 class="font-bold text-lg">Daftar Produk</h1>
			<span class="text-gray-400 text-sm"
				>{Math.min(data.currentPage * PAGINATION_DEFAULT, data.total)} dari {data.total}</span
			>
		</div>
		<div class="grid grid-cols-2 auto-rows-auto gap-3 p-3">
			{#each data.products as product}
				<Productcard data={product} />
			{/each}
		</div>
		<Pagination total={data.total} currentPage={data.currentPage} />
	{:else}
		<div class="flex items-center justify-center px-3 mt-10 font-bold text-xl">
			Data tidak ditemukan!
		</div>
	{/if}
</div>
