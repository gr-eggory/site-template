<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { FlyParams } from 'svelte/transition';

	import { theme, toggleTheme } from '$lib/store';

	const myFly: FlyParams = { y: 10 };
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
	{#if $theme === 'dark'}
		<div in:fly={myFly}>
			<!-- sun icon -->
			<span>Dark</span>
		</div>
	{:else}
		<div in:fly={myFly}>
			<!-- moon icon -->
			<span>Light</span>
		</div>
	{/if}
</button>

<style>
	button {
		padding: 0;
		font-weight: inherit;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;
	}
	button > * {
		display: flex;
		gap: var(--size-2);
	}
</style>
