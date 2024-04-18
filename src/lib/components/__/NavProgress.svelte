<script lang="ts">
	import { navigating } from '$app/stores';
	import clsx from 'clsx';

	let progress = 0;
	let intervalRef: ReturnType<typeof setTimeout>;

	$: {
		if ($navigating && progress === 0) {
			progress = 25;
			intervalRef = setInterval(() => {
				// add dummy progress for better ux
				if (progress < 80) {
					progress % 2 === 0 ? (progress += 9) : (progress += 5);
				}
			}, 400);
		}

		$navigating?.complete.then(() => {
			clearInterval(intervalRef);
			progress = 100;

			setTimeout(() => {
				progress = 0;
			}, 500);
		});
	}
</script>

<div class="w-full h-1 fixed z-50">
	<div
		class={clsx(
			'bg-cyan-500 h-full transition-[width] duration-500',
			progress === 0 ? 'opacity-0' : 'opacity-100'
		)}
		style="width: {progress}%;"
	></div>
</div>
