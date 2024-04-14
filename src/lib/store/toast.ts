import { writable, get } from 'svelte/store';

const initial = { show: false, content: '', timeout: 3500 };

type ToastProps = {
	show: boolean;
	content: string;
	timeout?: number;
};

export const toast = writable<ToastProps>(initial);

export const showToast = (config: Pick<ToastProps, 'content' | 'timeout'>) => {
	if (get(toast).show) return;

	toast.set({ ...config, show: true });
	setTimeout(() => {
		toast.set({ ...config, show: false });
	}, config.timeout || 3500);
};
