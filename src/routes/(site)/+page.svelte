<main>
	<div class="panel">
		<div class="content">
			<section class="left">
				<h1>Welcome to your site!</h1>
				<h2>Create posts, photo galleries, and more!</h2>
				<div>
					<p>
						To begin, start editing the config with your info in <code>/src/lib/config.ts</code>
					</p>
					<p>
						For more information, please visit <a
							href="https://github.com/gr-eggory/site-template"
							target="_blank">here</a
						>.
					</p>
				</div>
			</section>
			<section class="right" />
		</div>
	</div>
</main>

<style lang="scss">
	main {
		padding: var(--spacing-24);
		width: 90%;
		margin: 0 auto;
		margin-top: 5rem;

		.content {
			padding: 10rem;
			display: grid;
			grid-template-columns: 2fr 1fr;
			height: 100%;

			.left {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				gap: var(--spacing-32);
			}
		}
	}

	.panel {
		background-color: hsl(0, 0%, 24%);
		border-radius: var(--rounded-20);
		box-shadow: var(--shadow-md);
	}

	a {
		color: var(--clr-primary);
	}
</style>
