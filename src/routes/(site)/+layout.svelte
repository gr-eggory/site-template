<script lang="ts">
	import { onMount } from 'svelte';
	import { preloadCode } from '$app/navigation';

	import '../../styles/styles.scss';
	import { navItems } from '$lib/config';
	import Header from '$lib/components/Header/Header.svelte';
	import Transition from '$lib/components/Transition/Transition.svelte';

	export let data;

	onMount(() => {
		const navRoutes = navItems.map((item) => item.route);
		preloadCode(...navRoutes);
	});
</script>

<Header />
<main>
	<Transition url={data.currentUrl} exceptions={['/blog']}>
		<slot />
	</Transition>
</main>
