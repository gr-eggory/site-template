import { dev } from '$app/environment';

import { postsPerPage } from '$lib/config';
import type PostsEndpointOptions from '../types/PostsEndpointOptions';
import type Post from '../types/post';

const fetchPosts = async ({
	offset = 0,
	limit = postsPerPage,
	category = '',
}: PostsEndpointOptions = {}): Promise<Post[]> => {
	let posts: Post[];

	posts = await Promise.all(
		Object.entries(import.meta.glob(`../content/posts/*.md`)).map(async ([path, page]) => {
			const { metadata } = (await page()) as { metadata: any };
			const slug = path.split('/').pop()?.split('.').shift();
			return { ...metadata, slug };
		})
	);

	if (!dev) posts = posts.filter((post) => post.published === true);

	let sortedPosts = posts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

	if (category) {
		sortedPosts = posts.filter((post) => post.categories.includes(category));
	}

	if (offset) {
		sortedPosts = sortedPosts.slice(offset);
	}

	// -1 means all posts, so -1 skips limiting
	if (limit && limit != -1 && limit < sortedPosts.length) {
		sortedPosts = sortedPosts.slice(0, limit);
	}

	const finalPosts = sortedPosts.map((post) => ({
		title: post.title,
		date: post.date,
		description: post.description,
		categories: post.categories,
		coverImage: post.coverImage,
		slug: post.slug,
		published: post.published,
	}));

	return finalPosts;
};

export default fetchPosts;
