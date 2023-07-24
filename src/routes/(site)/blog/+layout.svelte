<script lang="ts">
	import type { LayoutData } from './$types';
	import type Post from '$lib/types/post';
	import Sidebar from '$lib/components/Sidebar/Sidebar.svelte';
	import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';
	import Transition from '$lib/components/Transition/Transition.svelte';

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

<div class="layout">
	<Sidebar {popularPosts} {allCategories} />

	<Transition url={data.currentUrl}>
		<slot />
	</Transition>
</div>

<style lang="scss">
	.layout {
		display: flex;
		gap: var(--spacing-24);
	}
</style>
