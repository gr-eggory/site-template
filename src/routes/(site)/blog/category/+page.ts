import type Post from '$lib/types/post.js';

export const load = async ({ fetch }) => {
	const postsRes = await fetch('/api/posts/all');
	const posts: Post[] = await postsRes.json();

	const uniqueCategories = posts.reduce((acc: { [category: string]: number }, post) => {
		post.categories.forEach((category) => {
			if (!(category in acc)) {
				acc[category] = 0;
			}
			acc[category]++;
		});

		return acc;
	}, {});

	const categoriesWithCounts = Object.entries(uniqueCategories).map(([category, count]) => ({
		title: category,
		count,
	}));

	return {
		categoriesWithCounts,
	};
};
