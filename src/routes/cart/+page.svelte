<script lang="ts">
	import ButtonIcon from '$lib/components/_/ButtonIcon.svelte';
	import Checkbox from '$lib/components/_/Checkbox.svelte';
	import { cart, decreaseProductQuantity, increaseProductQuantity } from '$lib/store/cart';
	import { formatCurrency } from '$lib/utils/formatting';
	import { getDiscount } from '$lib/utils/math';
	import { Icon, Minus, Plus, Trash } from 'svelte-hero-icons';

	let checked: number[] = [];
</script>

<div class="h-full">
	<ul>
		<li class="w-full bg-white px-4 py-3 border-b">
			<Checkbox
				checked={checked.length === $cart.length}
				on:change={() => {
					if (checked.length === $cart.length) {
						checked = [];
					} else {
						checked = $cart.map(({ id }) => id);
					}
				}}
			/>
		</li>
		{#each $cart as cart}
			<li class="w-full bg-white px-4 py-3 border-b flex gap-3">
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
								{formatCurrency(getDiscount(cart.price, 10))}
							</p>
							<span class="text-gray-400 line-through text-xs">{formatCurrency(cart.price)}</span>
						</div>
						<div class="flex items-center gap-3">
							<ButtonIcon
								class="sm:w-8 sm:h-8 h-6 w-6"
								on:click={() => decreaseProductQuantity(cart.id)}
								outline
							>
								{#if cart.quantity && cart.quantity > 1}
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
</div>
