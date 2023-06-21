import { json } from '@sveltejs/kit';

import fetchPosts from '$lib/utils/fetchPosts.js';
import type PostsEndpointOptions from '$lib/types/PostsEndpointOptions.js';

export const GET = async ({ params }): Promise<Response> => {
	const options: PostsEndpointOptions = {
		offset: 10,
	};

	if (params.offset) {
		options.offset = Number(params.offset);
	}

	const posts = await fetchPosts({ ...options });
	return json(posts);
};
