<script lang="ts">
	export let data;

	const {
		gallery: { title, description, date, photos },
	} = data;
</script>

<main>
	<h2>{title}</h2>
	<p>{description}</p>
	{#if date}
		<p>{date}</p>
	{/if}
	<div class="gallery-grid">
		{#each photos as photo}
			<!-- alt needs to be better than this -->
			<img src={photo} alt={photo.split('/').pop()?.split('.').shift() ?? ''} />
		{/each}
	</div>
</main>

<style>
	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		gap: var(--spacing-24);
		padding: var(--spacing-24);
	}
</style>
