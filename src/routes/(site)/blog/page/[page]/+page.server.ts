import { redirect } from '@sveltejs/kit';

import { postsPerPage } from '$lib/config.js';
import fetchPosts from '$lib/utils/fetchPosts.js';
import type { CountRes } from '../../../../api/posts/count/types.js';

export const load = async ({ params, url, fetch }) => {
	const page = params.page ? Number(params.page) : 1;

	if (!page || page <= 1) {
		throw redirect(301, '/blog');
	}

	const offset = page * postsPerPage - postsPerPage;
	const posts = await fetchPosts({ offset, limit: postsPerPage });

	const count = await fetch(`${url.origin}/api/posts/count`);
	const { total } = (await count.json()) as CountRes;

	return {
		posts,
		page,
		totalPosts: total,
	};
};
