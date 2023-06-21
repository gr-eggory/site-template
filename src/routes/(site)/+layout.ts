export const prerender = true;

/** @type {import('./$types').PageLoad} */
export const load = ({ url }) => ({
	currentUrl: url.pathname as string,
});
