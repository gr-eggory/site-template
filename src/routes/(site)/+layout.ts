export const prerender = true;

export const load = ({ url }) => ({
	currentUrl: url.pathname as string,
});
