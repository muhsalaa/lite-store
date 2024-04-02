<script>
	import NavBar from '$lib/components/___/NavBar.svelte';
	import '../app.css';

	import { afterNavigate } from '$app/navigation';

	afterNavigate(() => {
		document.getElementById('container')?.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	});
</script>

<div id="container" class="w-full h-svh overflow-y-auto bg-gray-50">
	<div class="max-w-lg min-w-96 mx-auto w-full bg-white shadow-sm min-h-full">
		<NavBar />
		<slot />
	</div>
</div>
