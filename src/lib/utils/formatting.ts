/**
 * Formats the input as a currency value.
 *
 * This function formats the input as a currency value, separating the thousands
 * with a dot. For example, if the input is `123456789`, the output will be
 * `Rp123.456.789`.
 *
 * @param {string|number} input - the input to be formatted as a currency
 * @return {string} the formatted currency value
 */
export function formatCurrency(input: string | number): string {
	if (!input) {
		return '';
	}
	input = input.toString();
	const groups = input.match(/.{1,3}(?=(.{3})*$)/g);
	if (!groups) {
		return input;
	}
	return 'Rp' + groups.join('.');
}
