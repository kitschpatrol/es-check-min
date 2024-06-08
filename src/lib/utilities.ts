import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { packageUp } from 'package-up'

// Yeesh
export async function getEsCheckPath() {
	const packagePath = await packageUp({
		cwd: path.resolve(path.dirname(fileURLToPath(import.meta.url))),
	})

	if (packagePath === undefined) {
		throw new Error('Could not find package.json.')
	}

	return path.join(path.dirname(packagePath), '/node_modules/.bin/es-check')
}
