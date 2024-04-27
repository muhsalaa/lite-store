<script lang="ts">
	import { config } from '$lib/store/config';
	import SocialIcons from '$lib/components/_/SocialIcons.svelte';
</script>

<footer class="mt-auto">
	<div class="flex p-4 bg-cyan-50">
		<div class="w-2/3 sm:w-3/4">
			<a class="flex items-center gap-2 mb-2" href="/">
				<img
					src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4dbe2e83261589.5d371e45eed23.png"
					alt="logo"
					class="w-8 h-8 rounded-full"
				/>
				<p class="font-bold text-sm">{$config.name} Store</p>
			</a>
			<p class="max-w-48 text-[10px] text-gray-700 mb-3">
				{$config.description}
			</p>
			<ul class="flex items-center gap-2">
				{#each $config.stores as store}
					<li><a href={store.url}><SocialIcons name={store.type} size={20} /></a></li>
				{/each}
			</ul>
		</div>
		<div class="flex-nowrap whitespace-nowrap">
			<ul class="">
				<li><a class="text-xs text-cyan-700 hover:underline" href="/#">Beranda</a></li>
				<li><a class="text-xs text-cyan-700 hover:underline" href="/#">Tentang Kami</a></li>
				<li><a class="text-xs text-cyan-700 hover:underline" href="/#">Testimoni</a></li>
			</ul>
		</div>
	</div>
	<div class="w-full h-8 bg-cyan-100 flex items-center justify-between px-4">
		<p class="text-xs text-cyan-900 font-bold">
			© {new Date().getFullYear()}
			{$config.name} Store
		</p>
		<a href="/#" class="text-xs text-cyan-700 hover:underline">Ketentuan Pelayanan</a>
	</div>
</footer>
