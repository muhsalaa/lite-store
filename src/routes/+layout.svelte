<script>
	import NavBar from '$lib/components/___/NavBar.svelte';
	import '../app.css';
</script>

<div class="w-full h-screen bg-gray-50">
	<div class="max-w-xl mx-auto w-full h-full bg-white border-l border-r">
		<NavBar />
		<slot />
	</div>
</div>
