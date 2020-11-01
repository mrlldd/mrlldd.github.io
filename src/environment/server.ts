import * as zod from 'zod';
import { loadEnvConfig } from '@next/env';

loadEnvConfig(process.cwd());

const schema = zod.object({
	environment: zod.enum(['local', 'production']),
	version: zod.string().nonempty(),
});

const env = schema.parse({
	environment: process.env.NEXT_PUBLIC_SITE_ENVIRONMENT,
	version: process.env.SITE_VERSION,
});

export default env;
