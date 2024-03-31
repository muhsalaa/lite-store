<script lang="ts">
	import Button from '$lib/components/_/ButtonIcon.svelte';
	import Carousel from '$lib/components/__/Carousel.svelte';

	const images = [
		'https://lelogama.go-jek.com/post_featured_image/jaringan-prima-promo_blog-header_720.jpg',
		'https://d2v6npc8wmnkqk.cloudfront.net/storage/11331/conversions/Header-Blog-GoPay-Promo-Game-seo_image_large.jpg',
		'https://news.codashop.com/id/wp-content/uploads/sites/4/2022/10/Gopay_Blog.jpg',
		'https://foto.kontan.co.id/2CosVjMLjJGrGXt7bOqoAkXrAP0=/smart/2021/12/09/1533324503p.jpg'
	];
</script>

<div>
	<Carousel items={images} />
</div>
