export const prerender = true;

/** @type {import('./$types').PageLoad} */
export const load = ({ url }) => ({
	path: url.pathname,
});
