<script lang="ts">
	import { galleries } from '$lib/config';
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
