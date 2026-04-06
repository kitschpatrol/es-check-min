import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { findPackage } from 'pkg-types'

/**
 * Get the `es-check` binary
 *
 * Includes some extra provisions for finding the binary in library contexts vs. global CLI installations.
 */
export async function getEsCheckPath() {
	const packagePath = await findPackage(path.resolve(path.dirname(fileURLToPath(import.meta.url))))
	const extension = process.platform === 'win32' ? '.cmd' : ''
	return path.join(path.dirname(packagePath), 'node_modules', '.bin', `es-check${extension}`)
}
