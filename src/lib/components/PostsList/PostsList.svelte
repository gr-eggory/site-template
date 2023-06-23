<script lang="ts">
	import type Post from '$lib/types/post';

	export let posts: Post[];
</script>

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
