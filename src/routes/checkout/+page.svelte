<script lang="ts">
	import Button from '$lib/components/_/Button.svelte';
	import InputField from '$lib/components/_/InputField.svelte';
	import TextArea from '$lib/components/_/TextArea.svelte';
	import { checkout } from '$lib/store/checkout';
	import { formatCurrency } from '$lib/utils/formatting';
	import { getDiscount } from '$lib/utils/math';
	import { goto } from '$app/navigation';
	import { deleteProductsFromCart } from '$lib/store/cart';
	import { validator } from '$lib/utils/validation';
	import { onMount } from 'svelte';
	import { config } from '$lib/store/config';

	onMount(() => {
		if ($checkout.length === 0) {
			goto('/cart', { replaceState: true });
		}
	});

	function getTotal() {
		const total = $checkout.reduce((acc, val) => {
			return acc + getDiscount(val.price, val.discount) * val.quantity!;
		}, 0);
		return total;
	}

	const schema = {
		full_name: ['empty', 'name'],
		address: ['empty', 'string'],
		phone_number: ['empty', 'phone']
	};

	function handleInput(e: Event) {
		const name = (e.target as HTMLInputElement).name;
		if (touched[(e.target as HTMLInputElement).name]) {
			validateData((e.target as HTMLInputElement).value, name);
		}
	}

	function validateData(data: string, key: string) {
		const validators = schema[key as keyof typeof schema];

		for (let i = 0; i < validators.length; i++) {
			error[key] = validator[validators[i] as keyof typeof validator](data);
			if (error[key]) break;
		}
	}

	function handleSubmit(e: Event) {
		const formData = new FormData(e.target as HTMLFormElement);

		for (const entry of formData.entries()) {
			validateData(entry[1] as string, entry[0]);
			touched[entry[0]] = true;
		}

		if (Object.values(error).some(Boolean)) {
			const firstErrorElement = document.getElementById(
				Object.entries(error).filter((item) => !!item[1])[0][0]
			);
			firstErrorElement?.scrollIntoView({ block: 'end', behavior: 'smooth' });
			setTimeout(() => {
				firstErrorElement?.focus();
			}, 500);
			return;
		}

		const message = `Halo kak, saya ingin memesan produk berikut:
${$checkout.reduce((acc, item) => {
	return (
		acc +
		`${item.title} x ${item.quantity} = *${formatCurrency(getDiscount(item.price, item.discount) * item.quantity!)}*\n`
	);
}, '')}
Total Harga: ${formatCurrency(getTotal())}

Berikut adalah detail pengiriman:
Nama: ${formData.get('full_name')}
Phone: ${formData.get('phone_number')}
Alamat: ${formData.get('address')}`;

		deleteProductsFromCart($checkout.map((item) => item.id));
		goto('/', { replaceState: true });
		window.open(
			`https://wa.me/${$config.phone_number}?text=${encodeURIComponent(message)}`,
			'_blank'
		);
	}

	const handleLeave = (e: Event) => {
		e.preventDefault();
		const confirmationMessage =
			'Apakah Anda yakin ingin meninggalkan halaman ini? Data Anda akan hilang.';

		return confirmationMessage; // Gecko + Webkit, Safari, Chrome etc.
	};

	const error: Record<string, string | undefined> = {};
	const touched: Record<string, boolean> = {};
</script>

<svelte:window on:beforeunload={handleLeave} />
<div class="bg-gray-100">
	<section class="bg-white px-4 py-3">
		<h2 class="font-bold mb-2 text-lg">Detail pengiriman</h2>
		<form on:submit|preventDefault={handleSubmit} id="order-data-form">
			<div class="mb-3">
				<label for="full_name" class="block mb-2 font-medium">Nama</label>
				<InputField
					type="text"
					name="full_name"
					id="full_name"
					error={error.full_name}
					on:input={handleInput}
				/>
			</div>
			<div class="mb-3">
				<label for="address" class="block mb-2 font-medium">Alamat</label>
				<TextArea name="address" id="address" error={error.address} on:input={handleInput} />
			</div>
			<div class="mb-3">
				<label for="phone_number" class="block mb-2 font-medium">Nomor HP</label>
				<InputField
					id="phone_number"
					name="phone_number"
					type="text"
					error={error.phone_number}
					on:input={handleInput}
				/>
			</div>
		</form>
	</section>

	<section class="mt-3 bg-white py-3">
		<h2 class="font-bold mb-2 text-lg px-4">Detail pesanan</h2>
		<ul>
			{#each $checkout as product}
				<li class="border-b last:border-b-0">
					<div class="w-full bg-white px-4 py-3 flex gap-3">
						<div class="flex-shrink-0">
							<img
								src={product.thumbnail}
								alt="product name"
								class="w-32 h-32 border aspect-square rounded-md overflow-hidden object-cover"
							/>
						</div>
						<div>
							<a
								class="text-ellipsis text-gray-600 line-clamp-2 text-base mb-2"
								href="/item/{product.id}"
							>
								{product.title}
							</a>
							<p class="font-bold">
								{product.quantity} x {formatCurrency(getDiscount(product.price, product.discount))}
							</p>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</section>
	<section class="mt-3 bg-white py-3 px-4">
		<h2 class="font-bold mb-2 text-lg">Ringkasan belanja</h2>
		<div class="flex items-center justify-between">
			<p>Total</p>
			<p class="font-bold">{formatCurrency(getTotal())}</p>
		</div>
	</section>

	<section class="mt-3 bg-white py-3 px-4">
		<Button type="submit" form="order-data-form" block class="h-12">Pesan Sekarang</Button>
	</section>
</div>
