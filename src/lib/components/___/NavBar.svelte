<script lang="ts">
	import clsx from 'clsx';
	import { Icon, Bars3 } from 'svelte-hero-icons';

	import { page } from '$app/stores';
	import ButtonIcon from '$lib/components/_/ButtonIcon.svelte';
	import Cart from '$lib/components/__/Cart.svelte';
	import { clickOutside } from '$lib/utils/clickOutside';

	let open = false;
	$: pathname = $page.url.pathname;

	const paths = [
		{ path: '/', name: 'Beranda' },
		{ path: '/about', name: 'Tentang Kami' },
		{ path: '/testimony', name: 'Testimoni' },
		{ path: '/term-of-service', name: 'Ketentuan Pelayanan' }
	];

	function toggleNav(e: Event) {
		// prevent closed nav when click outside
		e.stopPropagation();
		open = !open;
	}
</script>

<header class="sticky top-0 bg-white z-20 shadow-md">
	<div class="w-full h-16 border-b px-3 flex items-center justify-between">
		<a class="flex items-center gap-2" href="/">
			<img
				src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4dbe2e83261589.5d371e45eed23.png"
				alt="logo"
				class="w-10 h-10"
			/>
			<p class="font-bold text-xl">Emot's Store</p>
		</a>
		<div class="flex items-center gap-2">
			<Cart />
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
