<script lang="ts">
	import clsx from 'clsx';
	import { Icon, Star } from 'svelte-hero-icons';

	type Testimony = {
		id: string;
		rating: number;
		text: string;
		name: string;
	};

	const testimonies = [
		{
			id: 'asdfasdf',
			product: 'Coklat dark',
			name: 'John Doe',
			rating: 4,
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, voluptates.'
		},
		{
			id: 'asdfaesdf',
			product: 'Coklat dark',
			name: 'John Doe',
			rating: 5,
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, voluptates.'
		},
		{
			id: 'asdfasdadf',
			product: 'Coklat dark',
			name: 'John Doe',
			rating: 3,
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, voluptates.'
		},
		{
			id: 'asdfasdgf',
			product: 'Coklat dark',
			name: 'John Doe',
			rating: 2,
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, voluptates.'
		},
		{
			id: 'asdfasdf',
			product: 'Coklat dark',
			name: 'John Doe',
			rating: 4,
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, voluptates.'
		},
		{
			id: 'asdfaesdf',
			product: 'Coklat dark',
			name: 'John Doe',
			rating: 5,
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, voluptates.'
		},
		{
			id: 'asdfasdadf',
			product: 'Coklat dark',
			name: 'John Doe',
			rating: 3,
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, voluptates.'
		},
		{
			id: 'asdfasdgf',
			product: 'Coklat dark',
			name: 'John Doe',
			rating: 2,
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, voluptates.'
		},
		{
			id: 'asdfasdf',
			product: 'Coklat dark',
			name: 'John Doe',
			rating: 4,
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, voluptates.'
		},
		{
			id: 'asdfaesdf',
			product: 'Coklat dark',
			name: 'John Doe',
			rating: 5,
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, voluptates.'
		},
		{
			id: 'asdfasdadf',
			product: 'Coklat dark',
			name: 'John Doe',
			rating: 3,
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, voluptates.'
		},
		{
			id: 'asdfasdgf',
			product: 'Coklat dark',
			name: 'John Doe',
			rating: 2,
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, voluptates.'
		}
	];
</script>

<ul class="p-4 flex flex-col gap-4">
	{#each testimonies as testimony}
		<li class="p-4 shadow-md rounded-xl">
			<div class="flex items-center justify-between w-full mb-2">
				<p class="font-bold">{testimony.product}</p>
				<div class="flex items-center gap-1">
					{#each Array.from({ length: 5 }, (_, i) => i) as i}
						<Icon
							class={clsx(
								'w-4 h-4',
								i < testimony.rating
									? 'fill-yellow-300 stroke-yellow-300'
									: 'fill-gray-300 stroke-gray-300'
							)}
							src={Star}
						/>
					{/each}
				</div>
			</div>
			<p class="text-sm italic text-gray-400 mb-1">{testimony.name}</p>
			<p class="text-sm">{testimony.text}</p>
		</li>
	{/each}
</ul>
