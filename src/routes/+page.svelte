<script lang="ts">
	import SocialIcons from '$lib/components/_/SocialIcons.svelte';
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

<Carousel items={images} />
<div>
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
		<div class="flex items-center justify-center px-3 mt-10 font-bold text-lg">
			Produk sedang disiapkan .. 🤗
		</div>
	{/if}
</div>
<footer class="mt-auto">
	<div class="flex p-4 bg-cyan-100">
		<div class="w-2/3">
			<div class="flex items-center gap-2 mb-2">
				<img
					src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4dbe2e83261589.5d371e45eed23.png"
					alt="logo"
					class="w-8 h-8 rounded-full"
				/>
				<p class="font-bold text-sm">BrainBoost Store</p>
			</div>
			<p class="max-w-48 text-[10px] text-gray-700 mb-3">
				One stop shopping untuk berbagai suplemen otak alami.
			</p>
			<ul class="flex items-center gap-2">
				<li><a href="/#"><SocialIcons name="tokopedia" size={20} /></a></li>
				<li><a href="/#"><SocialIcons name="shopee" size={20} /></a></li>
				<li><a href="/#"><SocialIcons name="blibli" size={20} /></a></li>
				<li><a href="/#"><SocialIcons name="tiktok" size={20} /></a></li>
			</ul>
		</div>
		<div class="flex-nowrap whitespace-nowrap">
			<ul class="">
				<li><a class="text-xs text-cyan-700 hover:underline" href="/#">Beranda</a></li>
				<li><a class="text-xs text-cyan-700 hover:underline" href="/#">Tentang Kami</a></li>
				<li><a class="text-xs text-cyan-700 hover:underline" href="/#">Testimoni</a></li>
				<li><a class="text-xs text-cyan-700 hover:underline" href="/#">Source Code</a></li>
			</ul>
		</div>
	</div>
	<div class="w-full h-8 bg-cyan-200 flex items-center justify-between px-4">
		<p class="text-xs text-cyan-900 font-bold">© 2022 BrainBoost Store</p>
		<a href="/#" class="text-xs text-cyan-700 hover:underline">Ketentuan Pelayanan</a>
	</div>
</footer>
