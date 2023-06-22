<script lang="ts">
	import type { PageData } from './$types';
	import { siteConfig } from '$lib/config';
	import type Post from '$lib/types/post';

	// import Main from '$lib/components/Main.svelte';
	// import Pagination from '$lib/components/Pagination.svelte';
	// import PostList from '$lib/components/posts/PostList.svelte';

	export let data: PageData;
	let posts = data.posts || [];
	let totalPosts = data.totalPosts.total;
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
	<ul>
		{#each posts as post (post.title)}
			<li>
				<article>
					<a href="/blog/{post.slug}">
						<!-- img goes here -->
						<h2>
							{post.title}
						</h2>
						<p>{post.description}</p>
						<p>Created on {post.date}</p>
					</a>
				</article>
			</li>
		{/each}
	</ul>
</main>

<style lang="scss">
</style>
