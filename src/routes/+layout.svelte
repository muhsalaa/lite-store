<script>
	import NavBar from '$lib/components/___/NavBar.svelte';
	import '../app.css';

	import { afterNavigate } from '$app/navigation';
	import Footer from '$lib/components/___/Footer.svelte';

	afterNavigate(() => {
		document.getElementById('container')?.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	});
</script>

<div id="container" class="w-full h-svh overflow-y-auto bg-gray-50">
	<div class="max-w-lg min-w-[375px] mx-auto w-full bg-white min-h-full flex flex-col">
		<NavBar />
		<slot />
		<Footer />
	</div>
</div>
