import { execa } from 'execa'
import { getEsCheckPath } from './utilities'

const esCheckPath = await getEsCheckPath()

const esVersions = [
	// 'es3', // not working
	'es5',
	'es6/es2015',
	'es7/es2016',
	'es8/es2017',
	'es9/es2018',
	'es10/es2019',
	'es11/es2020',
	'es12/es2021',
	'es13/es2022',
	// 'es14/es2023', // not working
] as const

export type EsVersion = (typeof esVersions)[number]

export async function esCheckMin(path: string): Promise<EsVersion | undefined> {
	for (const esVersion of esVersions) {
		const cleanVersion = esVersion.split('/').at(-1) ?? esVersion

		try {
			await execa(esCheckPath, [cleanVersion, path, '--silent', '--allow-hash-bang', '--module'])
			return esVersion
		} catch {
			continue
		}
	}

	return undefined
}
