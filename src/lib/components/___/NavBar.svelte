<script lang="ts">
	import clsx from 'clsx';
	import { Icon, Bars3, ArrowLeft } from 'svelte-hero-icons';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { config } from '$lib/store/config';

	import ButtonIcon from '$lib/components/_/ButtonIcon.svelte';
	import Cart from '$lib/components/__/Cart.svelte';
	import { clickOutside } from '$lib/utils/clickOutside';

	let open = false;
	$: pathname = $page.url.pathname;

	const paths = [
		{ path: '/', name: 'Beranda', logo: true },
		{ path: '/about', name: 'Tentang Kami', logo: true },
		{ path: '/testimony', name: 'Testimoni', logo: true }
	];

	function toggleNav(e: Event) {
		// prevent closed nav when click outside
		e.stopPropagation();
		open = !open;
	}

	const back = () => {
		// save previous page url
		const prevPage = window.location.href;

		// go back one page
		window.history.go(-1);

		setTimeout(function () {
			// if the page url doesnt change in 400ms
			// means there is no history to go back and the url is same
			// then close the webview
			if (window.location.href == prevPage) {
				goto('/');
			}
		}, 400);
	};
</script>

<header class="sticky top-0 bg-white z-20 shadow-md">
	<div class="w-full h-16 border-b px-3 flex items-center justify-between">
		{#if paths.find((path) => path.path === pathname)}
			<a class="flex items-center gap-2" href="/">
				<img
					src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4dbe2e83261589.5d371e45eed23.png"
					alt="logo"
					class="w-10 h-10"
				/>
				<p class="font-bold text-xl">{$config.name} Store</p>
			</a>
		{:else}
			<button on:click={back} class="flex items-center gap-2">
				<span class="w-6 h-6">
					<Icon src={ArrowLeft} />
				</span>
				{#if pathname === '/cart'}
					<span class="font-semibold text-lg mb-0.5">Keranjang</span>
				{:else if pathname === '/checkout'}
					<span class="font-semibold text-lg mb-0.5">Pemesanan</span>
				{/if}
			</button>
		{/if}
		<div class="flex items-center gap-2">
			<a href="/cart">
				<Cart />
			</a>
			<ButtonIcon on:click={toggleNav} class="w-10 h-10">
				<Icon src={Bars3} />
			</ButtonIcon>
		</div>
	</div>
	<nav
		class={clsx(
			'overflow-hidden absolute w-full z-10',
			open ? 'max-h-40 transition-[max-height] duration-300' : 'max-h-0'
		)}
		use:clickOutside={() => {
			open = false;
		}}
	>
		<ul>
			{#each paths as path}
				<li class="h-10 w-full bg-white z-10 border-b">
					<a
						on:click={() => (open = false)}
						class={clsx(
							'flex px-3 items-center h-full w-full hover:bg-gray-100',
							pathname === path.path && 'font-bold'
						)}
						href={path.path}>{path.name}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>
