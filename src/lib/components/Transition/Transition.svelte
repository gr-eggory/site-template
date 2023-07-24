<script lang="ts">
	import { fade } from 'svelte/transition';

	export let url: string;
	export let exceptions: string[] = [];

	let previousPage = '/';
	let key = 0;

	$: {
		(() => {
			const doNotTriggerTransition = exceptions.some(
				(exception) => previousPage.startsWith(exception) && url.startsWith(exception)
			);
			if (doNotTriggerTransition) {
				previousPage = url;
				return;
			}
			key++;
			previousPage = url;
		})();
	}
</script>

{#key key}
	<div class="transition" in:fade>
		<slot />
	</div>
{/key}

<style>
	.transition {
		height: 100%;
	}
</style>
