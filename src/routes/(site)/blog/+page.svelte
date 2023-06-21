<script lang="ts">
	import type { PageData } from './$types';
	import type Post from '$lib/types/post';

	// import Main from '$lib/components/Main.svelte';
	// import Pagination from '$lib/components/Pagination.svelte';
	// import PostList from '$lib/components/posts/PostList.svelte';

	export let data: PageData;
	let posts = data.posts || [];
	let totalPosts = data.totalPosts.total;

</script>

<svelte:head>
	<title>Evergreg | Blog</title>
	<meta
		data-key="description"
		name="description"
		content="Writings on software development, biology, and psychology"
	/>
	<!-- <meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" /> -->
	<!-- <meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png" /> -->
</svelte:head>

<!-- <Main className="blog-roll">
	<div class="compressed-content double-wide">
		<PostList {posts} />

		<Pagination currentPage={1} {totalPosts} />
	</div>
</Main> -->

<div>
	{#each posts as post (post.title)}
		<div>
			<h3>{post.title}</h3>
			<p>{post.description}</p>
			<p>Created on {post.date}</p>
		</div>
	{/each}
</div>

<style lang="scss">
</style>
