<script lang="ts">
	import type { LayoutData } from './$types';
	import type Post from '$lib/types/post';
	// import Sidebar from '$lib/components/Sidebar.svelte';
	// import { prefersReducedData } from '$lib/assets/js/utils';
	import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data: LayoutData;
	let popularPosts: LayoutData['popularPosts'];
	let allCategories: LayoutData['allCategories'];
	$: ({ popularPosts, allCategories } = data);
	// onMount(() => {
	// 	if (!prefersReducedData()) {
	// 		popularPosts.forEach((post) => {
	// 			preloadCode(`/blog/${post.slug}`);
	// 		});
	// 	}
	// });
</script>

<div class="layout-grid">
	<div class="sidebar-wrapper">
		<!-- TODO -->
		<!-- <Sidebar {popularPosts} {allCategories} /> -->
		sidebar
	</div>

	<slot />
</div>

<style lang="scss">
</style>
