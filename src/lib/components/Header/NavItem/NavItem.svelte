<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;

	$: isCurrentPage = $page.url.pathname.startsWith(href);
</script>

<li>
	<a {href} class:active={isCurrentPage} aria-current={isCurrentPage}>
		<slot />
	</a>
</li>

<style>
	a {
		font-size: var(--font-24);
	}

	.active {
		text-decoration: underline;
	}
</style>
