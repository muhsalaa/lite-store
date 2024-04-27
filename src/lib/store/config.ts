import { writable } from 'svelte/store';
import { PUBLIC_PHONE_NUMBER } from '$env/static/public';
import type { StoreType } from '$lib/types/product';

type StoreConfig = {
	name: string;
	phone_number: string;
	city: string;
	city_code: string;
	description: string;
	stores: {
		type: StoreType;
		url: string;
	}[];
	about_us?: string;
	terms_and_conditions?: string;
	testimony?: {
		stars: number;
		text: string;
		name: string;
	}[];
};

export const config = writable<StoreConfig>({
	name: 'BrainBoost',
	phone_number: PUBLIC_PHONE_NUMBER,
	city: 'Bogor',
	city_code: '78',
	description: 'One stop shopping untuk berbagai suplemen otak alami.',
	stores: [
		{ type: 'tokopedia', url: 'https://google.com' },
		{ type: 'shopee', url: 'https://google.com' },
		{ type: 'blibli', url: 'https://google.com' },
		{ type: 'tiktok', url: 'https://google.com' }
	],
	about_us: `
  <img src="https://foto.kontan.co.id/2CosVjMLjJGrGXt7bOqoAkXrAP0=/smart/2021/12/09/1533324503p.jpg" alt="about us illustration" />
  <p>
		Halo! Selamat datang di BrainBoost, tempatnya bagi mereka yang mau ngasih perhatian lebih ke
		otak mereka. Jadi, apa tujuan kita di sini? Gampang, kita pengen bantuin kamu bikin otak jadi
		lebih gesit dan sehat secara alami!
	</p>
	<p>
		Di BrainBoost, kita punya semangat buat kasih kamu akses ke produk-produk top yang bisa bikin
		otak kamu jadi on fire: mulai dari suplemen makanan sampe makanan organik yang penuh nutrisi.
	</p>
	<p>
		Kita nggak cuma jualan produk, tapi kita juga pengen jadi temen yang ngebantu kamu nentuin apa
		yang cocok buat kebutuhan otak kamu. Karena kita percaya, dengan otak yang sehat, kamu bisa
		kejar mimpi-mimpi kamu dengan lebih semangat!
	</p>
	<p>
		Jadi, yuk, bergabung sama kita di perjalanan ini! Kita bisa belajar bareng-bareng, tukeran
		informasi, dan dukung satu sama lain. Bersama-sama, mari kita kejar potensi otak kita dan gapai
		hidup yang lebih keren dan berarti!
	</p>`
});
