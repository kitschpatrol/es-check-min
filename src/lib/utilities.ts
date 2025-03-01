import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { packageUp } from 'package-up'

/**
 * Get the `es-check` binary
 *
 * Includes some extra provisions for finding the binary in library contexts vs. global CLI installations.
 */
export async function getEsCheckPath() {
	const packagePath = await packageUp({
		cwd: path.resolve(path.dirname(fileURLToPath(import.meta.url))),
	})

	if (packagePath === undefined) {
		throw new Error('Could not find package.json.')
	}

	return path.join(path.dirname(packagePath), '/node_modules/.bin/es-check')
}
