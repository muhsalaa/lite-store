export async function load({ fetch, params }) {
	const id = params.id;

	const fetchData = async () => {
		const res = await fetch(`https://dummyjson.com/products/${id}`);
		const data = await res.json();

		return {
			...data,
			title: data.title + 'plus percobaan buat long data',
			price: data.price * 40000,
			discount: data.discountPercentage,
			type: data.id % 2 === 0 ? 'marketplace' : 'own_store',
			marketplaces: [
				{
					id: 1,
					type: 'tokopedia',
					link: 'https://www.tokopedia.com/emikoawa/kemeja-koko-lengan-pendek-pria-uzair-toramen-casual-polos-shanghai-white-xl-ef6cc?extParam=cmp%3D1%26ivf%3Dtrue%26src%3Dsearch'
				},
				{
					id: 2,
					type: 'shopee',
					link: 'https://shopee.co.id/Parfum-Lelabo-Unisex-30ml-Parfum-Pria-Wanita-i.770695241.25856421470?publish_id=&sp_atk=a2e876bc-16a6-4c87-abfa-9ea51e47aa5b&xptdk=a2e876bc-16a6-4c87-abfa-9ea51e47aa5b'
				}
			]
		};
	};

	const fetchRelatedData = async () => {
		const res = await fetch(`https://dummyjson.com/products?limit=5`);
		const data = await res.json();

		return {
			...data,
			products: data.products.map((data) => ({
				...data,
				title: data.title + 'plus percobaan buat long data',
				price: data.price * 40000,
				discount: data.discountPercentage
			}))
		};
	};

	return {
		product: await fetchData(),
		related: await fetchRelatedData()
	};
}
