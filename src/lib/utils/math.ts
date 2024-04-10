/**
 * Calculates the discounted price based on the original price and the discount percentage.
 *
 * @param originalPrice The original price of the product before the discount
 * @param discount The discount percentage (0-100)
 * @returns The discounted price rounded to the nearest integer
 */
export function getDiscount(originalPrice: number, discount: number) {
	return Math.ceil(originalPrice - (originalPrice * discount) / 100);
}
