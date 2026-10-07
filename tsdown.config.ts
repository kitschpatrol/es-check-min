import { defineConfig } from 'tsdown'

export default defineConfig({
	attw: {
		profile: 'esm-only',
	},
	// Remove generated entries and root-level chunks while keeping other assets.
	clean: ['dist/{bin,lib}/**/*.{js,d.ts,js.map,d.ts.map}', 'dist/*.{js,d.ts,js.map,d.ts.map}'],
	dts: true,
	entry: {
		'bin/cli': 'src/bin/cli.ts',
		'lib/index': 'src/lib/index.ts',
	},
	fixedExtension: false,
	format: 'esm',
	// Keep the library and its shared implementation readable, including in the CLI.
	minify: false,
	outDir: 'dist',
	platform: 'node',
	publint: true,
	tsconfig: 'tsconfig.build.json',
})
