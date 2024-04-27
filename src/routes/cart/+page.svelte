<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/_/Button.svelte';
	import ButtonIcon from '$lib/components/_/ButtonIcon.svelte';
	import Checkbox from '$lib/components/_/Checkbox.svelte';
	import { cart, decreaseProductQuantity, increaseProductQuantity } from '$lib/store/cart';
	import { checkoutProduct } from '$lib/store/checkout';
	import { formatCurrency } from '$lib/utils/formatting';
	import { getDiscount } from '$lib/utils/math';
	import { Icon, Minus, Plus, Trash } from 'svelte-hero-icons';

	let checked: number[] = [];
	$: totalAmount = $cart.reduce((acc, cart) => {
		if (checked.includes(cart.id)) {
			return acc + cart.quantity! * getDiscount(cart.price, cart.discount);
		}

		return acc + 0;
	}, 0);

	function decreaseProduct(id: number) {
		decreaseProductQuantity(id);
		// remove checked data when product deleted
		$cart.find((cart) => cart.id === id) ? null : (checked = checked.filter((i) => i !== id));
	}

	function checkoutChosenProduct() {
		checkoutProduct($cart.filter((cart) => checked.includes(cart.id)));
		goto('/checkout');
	}
</script>

{#if $cart.length}
	<ul>
		{#each $cart as cart}
			<li class="w-full bg-white px-4 py-3 border-b flex gap-3 last:border-b-0">
				<Checkbox
					checked={checked.includes(cart.id)}
					on:change={() => {
						if (checked.includes(cart.id)) {
							checked = checked.filter((id) => id !== cart.id);
						} else {
							checked = [...checked, cart.id];
						}
					}}
				/>
				<div class="flex-shrink-0">
					<img
						src={cart.thumbnail}
						alt="product name"
						class="w-24 h-24 border aspect-square rounded-md overflow-hidden object-cover"
					/>
				</div>
				<div class="flex flex-col w-full justify-between">
					<a class="text-sm text-ellipsis line-clamp-2 sm:text-base" href="/item/{cart.id}">
						{cart.title}
					</a>
					<div class="flex items-center justify-between">
						<div>
							<p class="font-bold text-sm">
								{formatCurrency(getDiscount(cart.price, cart.discount))}
							</p>
							<span class="text-gray-400 line-through text-xs">{formatCurrency(cart.price)}</span>
						</div>
						<div class="flex items-center gap-3">
							<ButtonIcon
								class="sm:w-8 sm:h-8 h-6 w-6"
								on:click={() => decreaseProduct(cart.id)}
								outline
							>
								{#if cart.quantity && cart.quantity > (cart.min_order || 1)}
									<Icon src={Minus} />
								{:else}
									<Icon src={Trash} />
								{/if}
							</ButtonIcon>
							<span class="text-xs sm:text-sm">{cart.quantity}</span>
							<ButtonIcon
								class="sm:w-8 sm:h-8 h-6 w-6"
								on:click={() => increaseProductQuantity(cart.id)}
								outline
							>
								<Icon src={Plus} />
							</ButtonIcon>
						</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>

	<div class="w-full bg-white px-4 py-2 sticky bottom-0 border-y flex justify-between items-center">
		<label class="flex items-center gap-2 cursor-pointer" for="checkbox-all">
			<Checkbox
				checked={checked.length === $cart.length}
				on:change={() => {
					if (checked.length === $cart.length) {
						checked = [];
					} else {
						checked = $cart.map(({ id }) => id);
					}
				}}
				id="checkbox-all"
			/> <span class="text-sm font-semibold">Semua</span>
		</label>
		<div class="flex gap-2 items-center">
			{#if totalAmount > 0}
				<div class="text-right">
					<h2 class="text-gray-400 text-xs font-medium">Total</h2>
					<p class="font-bold text-sm">{formatCurrency(totalAmount)}</p>
				</div>
			{/if}
			<Button on:click={checkoutChosenProduct} disabled={checked.length === 0}>Beli</Button>
		</div>
	</div>
{:else}
	<div class="flex items-center justify-center px-3 mt-10 font-bold text-lg">
		Keranjangmu masih kosong nih .. 😁
	</div>
{/if}
