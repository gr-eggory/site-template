<script lang="ts">
	import PostsList from '$lib/components/PostsList/PostsList.svelte';

	export let data;

	const category = data.category;
	const posts = data.posts;
</script>

<main>
	<h1>Category: <b>{category}</b></h1>

	<PostsList {posts} />
</main>
