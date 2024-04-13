import type { ProductProps } from '$lib/types/product';
import { writable, get } from 'svelte/store';

type CartData = ProductProps & { quantity?: number };

const CART_STORAGE_KEY = 'CART_STORAGE_KEY_adkeuo8j';

export const cart = writable<CartData[]>([]);

export const loadInitialCart = () => {
	const cartStorage = localStorage.getItem(CART_STORAGE_KEY);
	const cartData = cartStorage ? JSON.parse(cartStorage) : [];
	cart.set(cartData);
};

export const addProductToCart = (product: CartData) => {
	const cartData = get(cart);
	if (cartData.find((data) => data.id === product.id)) {
		increaseProductQuantity(product.id);
	} else {
		const newCartData = [...cartData, { ...product, quantity: 1 }];
		cart.set(newCartData);
		localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCartData));
	}
};

export const increaseProductQuantity = (id: number) => {
	const cartData = get(cart);
	const newCartData = cartData.map((data) => {
		if (data.id === id) {
			return { ...data, quantity: data.quantity! + 1 };
		}
		return data;
	});
	cart.set(newCartData);
	localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCartData));
};

export const decreaseProductQuantity = (id: number) => {
	const cartData = get(cart);
	const newCartData = cartData
		.map((data) => {
			if (data.id === id) {
				if (data.quantity === 1) {
					return null;
				}
				return { ...data, quantity: data.quantity! - 1 };
			}
			return data;
		})
		.filter(Boolean) as CartData[];

	cart.set(newCartData);
	localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCartData));
};

export const deleteProductsFromCart = (id: number[]) => {
	const cartData = get(cart);
	const newCartData = cartData.filter((data) => !id.includes(data.id));
	cart.set(newCartData);
	localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCartData));
};
