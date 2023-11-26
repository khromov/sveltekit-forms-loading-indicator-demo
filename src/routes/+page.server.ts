import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const text = data.get('name');
        await new Promise((resolve) => setTimeout(resolve, 3000));
        return {
            greeting: `Hello ${text}!`,
        }
	},
} satisfies Actions;