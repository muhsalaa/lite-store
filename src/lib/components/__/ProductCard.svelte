<script lang="ts">
	import { formatCurrency } from '$lib/utils/formatting';
	import { getDiscount } from '$lib/utils/math';

	type ProductProps = {
		discount: number;
		id: number;
		title: string;
		description: string;
		price: number;
		thumbnail: string;
		stock: number;
	};

	export let data: ProductProps;
</script>

<a
	class="shadow-md border rounded-lg overflow-hidden text-left flex flex-col min-w-40"
	href="/item/{data.id}"
>
	<div>
		<img src={data.thumbnail} alt="product name" class="w-full bg-center aspect-square" />
	</div>
	<div class="h-2 rounded-br-full bg-cyan-500 w-full"></div>
	<div class="p-2">
		<h2 class="text-xs sm:text-sm text-ellipsis line-clamp-2 mb-1">
			{data.title}
		</h2>
		<div>
			<p class="font-bold mb-1">{formatCurrency(getDiscount(data.price, data.discount))}</p>
			<p class="text-xs">
				<span class="text-gray-400 line-through">{formatCurrency(data.price)}</span>
				<span class="font-bold text-pink-600">{data.discount}%</span>
			</p>
		</div>
	</div>
</a>
