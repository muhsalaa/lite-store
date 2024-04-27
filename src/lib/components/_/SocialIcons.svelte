<script lang="ts">
	import type { StoreType } from '$lib/types/product';

	export let name: StoreType = 'bukalapak';
	export let size: number = 20;
</script>

<span class="base {name} " style="--size:{size}px;"></span>

<style>
	.base {
		background-repeat: no-repeat;
		background-image: url('/images/soc-icon.png');
		display: inline-block;
		height: var(--size);
		width: var(--size);
		background-size: var(--size) auto;
	}

	.bukalapak {
		background-position: 0 0;
	}

	.instagram {
		background-position: 0 calc(var(--size) * -1);
	}

	.facebook {
		background-position: 0 calc(var(--size) * -2);
	}

	.x {
		background-position: 0 calc(var(--size) * -3);
	}

	.tokopedia {
		background-position: 0 calc(var(--size) * -4);
	}

	.shopee {
		background-position: 0 calc(var(--size) * -5);
	}

	.blibli {
		background-position: 0 calc(var(--size) * -6);
	}

	.tiktok {
		background-position: 0 calc(var(--size) * -7);
	}

	.lazada {
		background-position: 0 calc(var(--size) * -8);
	}
</style>
