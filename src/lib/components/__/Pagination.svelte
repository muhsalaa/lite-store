<script lang="ts">
	import ButtonIcon from '$lib/components/_/ButtonIcon.svelte';
	import { PAGINATION_DEFAULT } from '$lib/constants/numbers';
	import { Icon, ChevronRight, ChevronLeft } from 'svelte-hero-icons';

	export let total: number;
	export let currentPage: number;

	$: isLastPage = currentPage === Math.floor(total / PAGINATION_DEFAULT);
</script>

<div class="flex gap-2 items-center justify-center py-6">
	<a
		class={currentPage === 1 ? 'pointer-events-none text-gray-300' : ''}
		href={currentPage > 1 ? `/?page=${currentPage - 1}` : '/'}
	>
		<ButtonIcon class="h-8 w-8 bg-"><Icon src={ChevronLeft} /></ButtonIcon>
	</a>
	<span class="text-gray-400 text-sm"
		>{Math.min(currentPage * PAGINATION_DEFAULT, total)} dari {total}</span
	>
	<a
		href="/?page={isLastPage ? currentPage : currentPage + 1}"
		class={isLastPage ? 'pointer-events-none text-gray-300' : ''}
	>
		<ButtonIcon class="h-8 w-8"><Icon src={ChevronRight} /></ButtonIcon>
	</a>
</div>
