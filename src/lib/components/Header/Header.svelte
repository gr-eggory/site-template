<script>
	import { navItems, siteConfig } from '$lib/config';
	import NavItem from './NavItem/NavItem.svelte';
</script>

<header>
	<nav>
		<a href="/">
			<h3 class="site-name">{siteConfig.title}</h3>
		</a>
		<ul>
			{#each navItems as { route, title } (route)}
				<NavItem href={route}>{title}</NavItem>
			{/each}
		</ul>
	</nav>
</header>

<style>
	header {
		padding: var(--spacing-16);
	}
	nav {
		display: flex;
		justify-content: space-between;
	}

	.site-name {
		color: var(--clr-primary);
	}

	ul {
		display: flex;
		gap: 2rem;
	}
</style>
