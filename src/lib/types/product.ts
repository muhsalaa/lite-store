export type ProductProps = {
	discount: number;
	id: number;
	title: string;
	description: string;
	price: number;
	thumbnail: string;
	stock: number;
	weight: number;
	location: string;
	condition: string;
	min_order: number;
};

export type StoreType =
	| 'bukalapak'
	| 'instagram'
	| 'facebook'
	| 'x'
	| 'tokopedia'
	| 'shopee'
	| 'blibli'
	| 'tiktok'
	| 'lazada';
