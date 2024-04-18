const pageSize = 20;

export async function load({ fetch, url }) {
	const currentPage = url.searchParams.get('page') || 1;
	const skip = (+currentPage - 1) * pageSize;

	const res = await fetch(`https://dummyjson.com/products?limit=${pageSize}&skip=${skip}`);
	const data = await res.json();

	return {
		...data,
		products: data.products.map((data) => ({
			...data,
			title: data.title + 'plus percobaan buat long data',
			price: data.price * 40000,
			discount: data.discountPercentage,
			type: data.id % 2 === 0 ? 'marketplace' : 'own_store'
		})),
		currentPage: +currentPage
	};
}
