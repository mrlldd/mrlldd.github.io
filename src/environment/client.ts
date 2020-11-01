import * as zod from 'zod';

const schema = zod.object({
	environment: zod.enum(['local', 'production']),
	clarity: zod
		.object({
			projectId: zod.string().nonempty(),
		})
		.required(),
});

const env = schema.parse({
	environment: process.env.NEXT_PUBLIC_SITE_ENVIRONMENT,
	clarity: {
		projectId: process.env.NEXT_PUBLIC_SITE_CLARITY_PROJECT_ID,
	},
});

export default env;
