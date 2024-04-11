<script lang="ts">
	import SocialIcons from '$lib/components/_/SocialIcons.svelte';
</script>

<footer class="mt-auto">
	<div class="flex p-4 bg-cyan-50">
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
	<div class="w-full h-8 bg-cyan-100 flex items-center justify-between px-4">
		<p class="text-xs text-cyan-900 font-bold">© 2022 BrainBoost Store</p>
		<a href="/#" class="text-xs text-cyan-700 hover:underline">Ketentuan Pelayanan</a>
	</div>
</footer>
