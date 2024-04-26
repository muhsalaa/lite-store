import { writable } from 'svelte/store';
import { PUBLIC_PHONE_NUMBER } from '$env/static/public';

type StoreConfig = {
	name: string;
	phone_number: string;
	city: string;
	city_code: string;
};

export const config = writable<StoreConfig>({
	name: 'BrainBoost',
	phone_number: PUBLIC_PHONE_NUMBER,
	city: 'Bogor',
	city_code: '78'
});
