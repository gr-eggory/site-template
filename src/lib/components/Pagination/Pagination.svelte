<script lang="ts">
	import { postsPerPage } from '$lib/config';

	export let currentPage: number;
	export let totalPosts: number;

	let pagesAvailable: number;
	$: pagesAvailable = Math.ceil(totalPosts / postsPerPage);

	const isCurrentPage = (page: number): boolean => page === currentPage;
</script>

{#key currentPage}
	{#if pagesAvailable > 1}
		<nav aria-label="Pagination navigation">
			<h2>Go to page:</h2>
			<ul>
				{#each Array.from({ length: pagesAvailable }, (_, i) => i + 1) as page}
					<li>
						<a href="/blog/page/{page}" aria-current={isCurrentPage(page)}>
							{page}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
{/key}

<style lang="scss">
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: start;
		gap: var(--spacing-8);
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: var(--font-16);
		font-weight: bold;
		transition: background 0.1s;

		&:hover {
			background: var(--clr-secondary);
		}

		&[aria-current='true'] {
			background: var(--clr-tertiary);
			color: var(--clr-tertiary-contrast-txt);
		}
	}
</style>
