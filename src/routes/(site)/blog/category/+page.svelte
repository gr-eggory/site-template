<script lang="ts">
	export let data;

	const { categoriesWithCounts } = data;
</script>

<ul>
	{#each categoriesWithCounts as category}
		<li>
			<a href="/blog/category/{category.title}">{category.title} ({category.count})</a>
		</li>
	{/each}
</ul>
