<script>
	import { navItems, siteConfig } from '$lib/config';
	import LightModeToggle from '../LightModeToggle/LightModeToggle.svelte';
	import NavItem from './NavItem/NavItem.svelte';
</script>

<header>
	<nav>
		<div class="upper">
			<a href="/" class="site-name">
				<h3>{siteConfig.title}</h3>
			</a>
			<LightModeToggle />
		</div>
		<div class="lower">
			<ul>
				{#each navItems as { route, title } (route)}
					<NavItem href={route}>{title}</NavItem>
				{/each}
			</ul>
		</div>
	</nav>
</header>

<style lang="scss">
	header {
		padding: var(--spacing-24);

		nav {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			gap: var(--spacing-16);

			.site-name {
				font-size: var(--font-32);
			}

			.upper {
				display: flex;
				justify-content: space-between;
			}

			.lower {
				display: flex;
				justify-content: space-between;

				ul {
					display: flex;
					gap: 2rem;
				}
			}
		}
	}
</style>
