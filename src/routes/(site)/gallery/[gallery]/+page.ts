import { galleries } from '$lib/config';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const { gallery } = params;

	const selectedGallery = galleries.find(({ slug }) => slug === gallery);

	if (!selectedGallery) {
		throw error(404, `Could not find ${gallery}`);
	}

	return {
		gallery: selectedGallery,
	};
};
