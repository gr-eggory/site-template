import type { Gallery } from './types/gallery';

// Main config for entire website
export const siteConfig = {
	title: 'My Cool Site',
	description: 'An Easy to Use Site Template',
	url: 'https://generic-site-template.vercel.app/',
	link: 'https://github.com/gr-eggory/site-template',
	author: 'Amadeus',
};

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10;

// Edit this to alter the main nav menu. (Also used by the footer).
export const navItems = [
	{
		title: 'Blog',
		route: '/blog',
	},
	{
		title: 'Gallery',
		route: '/gallery',
	},
	{
		title: 'About',
		route: '/about',
	},
	{
		title: 'Contact',
		route: '/contact',
	},
];

export const galleries: Gallery[] = [
	{
		title: 'Woodland Photography',
		slug: 'woodland-photography',
		excerpt: 'Shots taken in New England',
		description:
			'All photos were taken by a Canon EOS R6 Mark II with post-processing in Photoshop.',
		photos: [
			'/gallery/woodlands/woods1.jpg',
			'/gallery/woodlands/woods2.jpg',
			'/gallery/woodlands/woods3.jpg',
		],
	},
	{
		title: 'Creature Design',
		slug: 'creature-design',
		excerpt: 'Visual studies of speculative evolution.',
		description:
			'My inspirations draw primarily from entymology and herpetology. Most works done in pencil and pen, sometimes with watercolor.',
		photos: [
			'/gallery/animals/anole.webp',
			'/gallery/animals/ant.webp',
			'/gallery/animals/cat.webp',
			'/gallery/animals/cat.webp',
			'/gallery/animals/cat.webp',
			'/gallery/animals/cat.webp',
			'/gallery/animals/cat.webp',
		],
	},
];
