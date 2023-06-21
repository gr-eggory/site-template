<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;

	$: isCurrentPage = $page.url.pathname === href;
	$: console.log('page', page);
</script>

<li>
	<a {href} class:active={isCurrentPage} aria-current={isCurrentPage}>
		<slot />
	</a>
</li>

<style>
	.active {
		text-decoration: underline;
	}
</style>
