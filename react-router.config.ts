import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: './src/app',
	ssr: true,
	// Avoid prerendering wildcard to prevent SSR loader issues in production
	prerender: ['/', '/studio', '/saas', '/insights', '/careers', '/contact'],
} satisfies Config;
