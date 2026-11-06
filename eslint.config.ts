import { eslintConfig } from '@kitschpatrol/eslint-config'

export default eslintConfig({
	ignores: ['test/assets/*', 'test/assets-failing/*', '**/changelog.md'],
	ts: {
		overrides: {
			'depend/ban-dependencies': [
				'error',
				{
					allowed: ['execa'],
				},
			],
		},
	},
	type: 'lib',
})
