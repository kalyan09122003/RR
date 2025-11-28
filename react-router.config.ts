import type { Config } from '@react-router/dev/config';
import { vercelPreset } from '@react-router/serve/presets';

export default {
	appDirectory: './src/app',
	ssr: true,
	// Avoid prerendering wildcard to prevent SSR loader issues in production
	prerender: ['/', '/studio', '/saas', '/insights', '/careers', '/contact'],
  presets: [vercelPreset()],
} satisfies Config;
