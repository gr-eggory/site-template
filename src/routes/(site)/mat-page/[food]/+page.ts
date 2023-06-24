export const load = async ({ params }) => {
	const { food } = params;

	return {
		food,
	};
};
