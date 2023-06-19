export default interface Post {
	title: string;
	date: string;
	description: string;
	categories: string[];
	coverImage: string;
	coverWidth?: number;
	coverHeight?: number;
	slug: string;
	subtitle?: string;
	updated?: string;
}

export type Frontmatter = {
	title: string;
	description: string;
	published: string;
	category: string;
	date: string;
};
