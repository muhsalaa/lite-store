export function formatCurrency(input: string | number) {
	if (!input) return null;
	input = typeof input === 'string' ? input : input.toString();
	const groups = input.match(/.{1,3}(?=(.{3})*$)/g);
	if (!groups) return input;
	return 'Rp' + groups.join('.');
}
