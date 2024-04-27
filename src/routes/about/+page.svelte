<script lang="ts">
	import { config } from '$lib/store/config';
</script>

<div class="p-4 [&_img]:w-full [&_img]:mb-4 [&_p]:mb-3">
	{@html $config.about_us}
</div>
