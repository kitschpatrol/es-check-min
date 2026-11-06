import { knipConfig } from '@kitschpatrol/knip-config'

export default knipConfig({
	ignore: ['test/assets/**/*', 'test/assets-failing/**/*'],
	ignoreDependencies: [
		'@kitschpatrol/chagent', // Typically invoked through bumpp's --execute argument, which Knip doesn't parse
		'es-check', // The es-check binary is invoked dynamically
		'tslib',
	],
})
