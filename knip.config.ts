import { knipConfig } from '@kitschpatrol/knip-config'

export default knipConfig({
	ignore: ['test/assets/**/*', 'test/assets-failing/**/*'],
	// The es-check binary is invoked dynamically
	ignoreDependencies: ['es-check'],
})
