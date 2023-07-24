<script lang="ts">
	import type { Tag } from '$lib/types/post';

	// import TagList from './tags/TagList.svelte'
	// import Tag from './tags/Tag.svelte'
	// import PostSearch from './PostSearch.svelte'

	export let popularPosts: Tag[];
	export let allCategories: string[];
</script>

<aside>
	<h2><a href="/blog/category">Categories</a></h2>
	<ul>
		{#each allCategories as category}
			<li>
				<a href="/blog/category/{category}">{category}</a>
			</li>
		{/each}
	</ul>

	<h2>Popular posts</h2>
	<ul>
		{#each popularPosts as post}
			<li>
				<a href="/blog/{post.slug}">{post.title}</a>
			</li>
		{/each}
	</ul>
</aside>
