<script lang="ts">
	export let data;

	const { galleries } = data;
</script>

<main>
	<ul>
		{#each galleries as gallery (gallery.title)}
			<li>
				<a href="/gallery/{gallery.slug}">
					<h3>{gallery.title}</h3>
				</a>
				<p>{gallery.excerpt}</p>
			</li>
		{/each}
	</ul>
</main>
