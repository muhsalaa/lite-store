<script lang="ts">
	import { toast } from '$lib/store/toast';
	import clsx from 'clsx';
</script>

<div
	class={clsx(
		'px-3 py-2 rounded-md bg-black text-white fixed left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out z-10 pointer-events-none',
		$toast.show ? 'opacity-1 top-20' : 'top-4 opacity-0'
	)}
>
	{$toast.content}
</div>
