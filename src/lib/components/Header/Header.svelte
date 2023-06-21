<script>
	import { navItems, siteConfig } from '$lib/config';
	import NavItem from './NavItem/NavItem.svelte';
</script>

<header>
	<nav>
		<span>{siteConfig.title}</span>
		<ul>
			{#each navItems as { route, title } (route)}
				<NavItem href={route}>{title}</NavItem>
			{/each}
		</ul>
	</nav>
</header>

<style>
	nav {
		display: flex;
		justify-content: space-between;
	}
	ul {
		display: flex;
		gap: 2rem;
	}
</style>
