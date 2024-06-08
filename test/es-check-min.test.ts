import { esCheckMin } from '../src/lib'
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

describe('version detection', () => {
	let tempAssetPath: string

	beforeAll(async () => {
		// Create temp directory
		tempAssetPath = path.join(os.tmpdir(), `es-check-min-${Date.now().toString()}`)
		await fs.mkdir(tempAssetPath, { recursive: true })

		// Generate JavaScript test variations
		const files = await fs.readdir('./test/assets/javascript', { withFileTypes: true })

		for (const file of files) {
			const filePath = path.join(file.parentPath, file.name)
			const fileExtension = path.extname(file.name)
			const fileBaseName = path.basename(file.name, fileExtension)

			const baseJavaScriptCode = await fs.readFile(filePath, 'utf8')

			const variants = {
				module: `${baseJavaScriptCode}\nexport default {}\n`,
				'module-hashbang': `#!/usr/bin/env node\n\n${baseJavaScriptCode}\nexport default {}\n`,
				'no-module': baseJavaScriptCode,
				'no-module-hashbang': `#!/usr/bin/env node\n\n${baseJavaScriptCode}`,
			}

			for (const [variant, code] of Object.entries(variants)) {
				const fileName = `${fileBaseName}-${variant}${fileExtension}`
				const filePath = path.join(tempAssetPath, fileName)
				await fs.writeFile(filePath, code)
			}
		}
	})

	it('properly detects ecmascript versions', { timeout: 120_000 }, async () => {
		const testFiles = await fs.readdir(tempAssetPath)
		const testFilePaths = testFiles.map((file) => path.join(tempAssetPath, file))

		for (const testFilePath of testFilePaths) {
			const expectedVersion = path.basename(testFilePath).split('-')[0]

			console.log(expectedVersion)

			const result = await esCheckMin(testFilePath)
			expect(result).toContain(expectedVersion)
		}
	})

	it('properly detects non-javascript files', { timeout: 120_000 }, async () => {
		const testFiles = await fs.readdir('./test/assets/not-javascript', { withFileTypes: true })
		const testFilePaths = testFiles.map((file) => path.join(file.parentPath, file.name))

		for (const testFilePath of testFilePaths) {
			const result = await esCheckMin(testFilePath)
			expect(result).toBeUndefined()
		}
	})

	afterAll(async () => {
		// Clean up temp files
		await fs.rm(tempAssetPath, { force: true, recursive: true })
	})
})
