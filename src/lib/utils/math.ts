export function getDiscount(originalPrice: number, discount: number) {
	return Math.ceil(originalPrice - (originalPrice * discount) / 100);
}
