<script>
	import { navItems, siteConfig } from '$lib/config';
	import LightModeToggle from '../LightModeToggle/LightModeToggle.svelte';
	import NavItem from './NavItem/NavItem.svelte';
</script>

<header>
	<nav>
		<ul>
			{#each navItems as { route, title } (route)}
				<NavItem href={route}>{title}</NavItem>
			{/each}
		</ul>
		<a href="/" class="site-name">
			<h3>{siteConfig.title}</h3>
		</a>
		<div class="config">
			<LightModeToggle />
		</div>
	</nav>
</header>

<style lang="scss">
	header {
		padding: var(--spacing-32);

		nav {
			display: grid;
			grid-template-columns: repeat(3, 1fr);

			ul {
				display: flex;
				gap: 2rem;
			}

			.site-name {
				justify-self: center;
				font-size: var(--font-32);
			}

			.config {
				justify-self: flex-end;
			}
		}
	}
</style>
