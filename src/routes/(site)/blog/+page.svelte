<script lang="ts">
	import type { PageData } from './$types';
	import { siteConfig } from '$lib/config';
	import Pagination from '$lib/components/Pagination/Pagination.svelte';
	import type Post from '$lib/types/post';
	import PostsList from '$lib/components/PostsList/PostsList.svelte';

	// import Main from '$lib/components/Main.svelte';
	// import PostList from '$lib/components/posts/PostList.svelte';

	export let data: PageData;
	let posts = data.posts || [];
	let totalPosts = data.total;
</script>

<svelte:head>
	<title>{siteConfig.title} | Blog</title>
	<meta data-key="description" name="description" content={siteConfig.description} />
	<!-- <meta property="og:image" content="https://joshcollinsworth.com/images/site-image.png" /> -->
	<!-- <meta name="twitter:image" content="https://joshcollinsworth.com/images/site-image.png" /> -->
</svelte:head>

<!-- <Main className="blog-roll">
	<div class="compressed-content double-wide">
		<PostList {posts} />

		<Pagination currentPage={1} {totalPosts} />
	</div>
</Main> -->

<main>
	<PostsList {posts} />

	<Pagination currentPage={1} {totalPosts} />
</main>

<style lang="scss">
</style>
