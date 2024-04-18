import type { ProductProps } from '$lib/types/product';
import { writable, get } from 'svelte/store';
import { cart } from './cart';

type CheckoutData = ProductProps & { quantity?: number };

const CART_STORAGE_KEY = 'CART_STORAGE_KEY_adkeuo8j';

export const checkout = writable<CheckoutData[]>([]);

export const checkoutProduct = (products: CheckoutData[]) => {
	checkout.set(products);
};

export const cleanProductCheckedOut = () => {
	const checkoutData = get(checkout);
	const checkoutDataId = checkoutData.map((data) => data.id);
	const cartData = get(cart);
	const newCartData = cartData.filter((data) => !checkoutDataId.includes(data.id));
	cart.set(newCartData);
	checkout.set([]);
	localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCartData));
};

export const cleanProductCheckout = () => {
	checkout.set([]);
};
