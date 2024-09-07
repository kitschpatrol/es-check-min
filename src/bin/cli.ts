import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { version } from '../../package.json'
import { esCheckMin } from '../lib'

const yargsInstance = yargs(hideBin(process.argv))

await yargsInstance
	.scriptName('es-check-min')
	.command(
		'* <file>',
		'Get the minimum supported ECMAScript version of a JavaScript file.',
		(yargs) =>
			yargs.positional('file', {
				demandOption: true,
				describe: 'Path to the JavaScript file to check.',
				normalize: true,
				type: 'string',
			}),
		async ({ file }) => {
			const result = await esCheckMin(file)

			if (result === undefined) {
				process.stderr.write('Not a viable JavaScript file.\n')
				process.exitCode = 1
			} else {
				process.stdout.write(`${result}\n`)
			}
		},
	)
	.alias('h', 'help')
	.version(version)
	.alias('v', 'version')
	.help()
	.wrap(process.stdout.isTTY ? Math.min(120, yargsInstance.terminalWidth()) : 0)
	.parse()
