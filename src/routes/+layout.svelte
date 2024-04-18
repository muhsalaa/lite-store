<script>
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { loadInitialCart } from '$lib/store/cart';

	import Toast from '$lib/components/__/Toast.svelte';
	import NavBar from '$lib/components/___/NavBar.svelte';
	import Footer from '$lib/components/___/Footer.svelte';

	import '../app.css';
	import NavProgress from '$lib/components/__/NavProgress.svelte';

	afterNavigate(() => {
		document.getElementById('container')?.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	});

	onMount(() => {
		loadInitialCart();
	});
</script>

<NavProgress />
<div id="container" class="w-full h-svh overflow-y-auto bg-gray-50">
	<div class="max-w-lg min-w-[375px] mx-auto w-full bg-white min-h-full flex flex-col">
		<NavBar />
		<slot />
		<Footer />
	</div>
	<Toast />
</div>
