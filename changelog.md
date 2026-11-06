# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

(Node.js support requirements have sometimes increased in minor or patch releases.)

## [1.0.14] - 2026-11-01

### Maintenance

- Raise runtime dependency requirements to execa `^10.2.1` and pkg-types `^2.4.0`.
- Refresh shared-config, tsdown, tslib, Vitest, and pnpm, and remove obsolete dependency release-age exceptions.
- Build automatically before running lint and fix commands.
- Simplify npm package inclusion from `dist/*` to the `dist` directory.
- Use pnpm-managed shared-config skills instead of the standalone skills dependency and prepare hook.
- Refresh GitHub release, release-note generation, and dependency-update actions.

## [1.0.13] - 2026-10-25

### Added

- Add Homebrew installation through `brew install kitschpatrol/tap/es-check-min`.

### Documentation

- Separate library and CLI installation guidance, document Homebrew installation, and include the required `<file>` argument in the npx example.

### Maintenance

- Refresh development dependencies, including Vitest 5 and pnpm, and clean up dependency build permissions, peer rules, and release-age exceptions.
- Update the Homebrew formula through Brewpub as part of npm release automation.
- Validate release tags against the repository's default branch and publish the exact triggering tag, with narrower version-tag triggers.
- Run dependency updates monthly and adjust link checks to exclude loopback URLs and tolerate empty input.

## [1.0.12] - 2026-10-07

### Changed

- **Breaking:** Replace the Node.js `>=20.19.0` requirement with `^24.16.0 || >=26.3.0`.

### Documentation

- Generate Node.js requirements from package metadata, clarify that library exports are ESM-only, and refresh the generated CLI reference.

### Maintenance

- Refresh runtime requirements, including `es-check` 9.8.1, execa 10, yargs 18.2, and Node.js 24 type definitions.
- Upgrade to shared-config 8, TypeScript 6, pnpm 12, and refreshed build/test tools; update cleanup and npm release scripts.
- Build the CLI and library together as unminified ESM with shared chunks and TypeScript declarations, preserving other assets during build cleanup.
- Add scheduled link checks for repository Markdown and configured external homepages.
- Add weekly automated dependency-update pull requests and refresh pinned GitHub Actions.
- Synchronize contributor skills automatically during package preparation.

## [1.0.11] - 2026-05-16

### Fixed

- Fix ECMAScript detection on Windows by resolving `es-check.cmd` and normalizing backslashes in input paths.

### Documentation

- Add a CI status badge and document contribution expectations and the linting, formatting, and README-generation tools.

### Maintenance

- Refresh runtime requirements, including yargs 18, `es-check` 9.6.4, and pkg-types 2.3.1.
- Migrate builds from pkgroll to tsdown with an explicit CLI shebang, package/type validation, and package metadata declaring no import side effects.
- Add build, lint, and noninteractive test CI on Linux, macOS, and Windows, with portable test paths and pinned workflow actions.
- Refresh shared-config 7, pnpm 11, and development dependencies; declare Node.js 22.18+ for contributors and make cleanup portable.
- Accept release tags with or without a `v` prefix and correctly pass the npm authentication token to the publish command.

## [1.0.10] - 2025-12-08

### Maintenance

- Refresh runtime dependency requirements, including `es-check` 9.5.2, execa 9.6.1, and type definitions.
- Update shared configuration, build/test dependencies, and pnpm.
- Fix contributor-tool hoisting by moving shared-config hoist settings from `.npmrc` to `pnpm-workspace.yaml`.

## [1.0.9] - 2025-11-06

### Documentation

- Correct CLI-help documentation generation by updating `mdat-plugin-cli-help` to 1.0.2.

## [1.0.8] - 2025-11-04

### Documentation

- Generate the README CLI reference from command help, including command descriptions, usage, and option aliases.

### Maintenance

- Update pkg-types and Node.js/yargs type requirements.
- Refresh development dependencies, including Vitest 4, and pnpm.
- Prioritize TypeScript declarations in package exports and limit build inputs to source files.
- Switch npm release automation from one-time-password authentication to token authentication.

## [1.0.7] - 2025-10-02

### Changed

- **Breaking:** Raise the minimum required Node.js version from 20.9.0 to 20.19.0.

### Maintenance

- Upgrade to `es-check` 9, refresh runtime requirements, and replace package-up with pkg-types for dependency lookup.
- Refresh development dependencies and pnpm, switch lint/fix commands to `ksc`, and simplify metadata synchronization with the v3 action.
- Stop minifying package builds and update build inputs and pnpm dependency-build permissions.

## [1.0.6] - 2025-03-04

### Changed

- Lower the Node.js requirement from 22 to 20.9.0 and remove the pnpm engine restriction.

### Maintenance

- Align Node.js type definitions with Node.js 20 and update shared-config to 5.2.

## [1.0.5] - 2025-03-01

### Changed

- **Breaking:** Raise the required Node.js version to 22.

### Documentation

- Document `esCheckMin` file/glob inputs and its `undefined` result when the input is not valid ECMAScript.

### Maintenance

- Upgrade to `es-check` 8 and refresh runtime dependency requirements, replacing exact pins with compatible ranges.
- Migrate to shared-config 5 and pnpm 10, adopting ESLint flat configuration, Knip checks, shared TypeScript settings, and refreshed build and workflow tooling.
- Improve version-detection test diagnostics and correct the ES2023 fixture's Set-method assumptions.

## [1.0.4] - 2024-09-14

### Changed

- **Breaking:** Raise the declared Node.js requirement from `>=20.0.0` to `>=20.16.5`.

### Maintenance

- Refresh Node.js type definitions, development dependencies, pnpm, and cleanup/release scripts.
- Fix metadata synchronization to use the action's `v2` tag.

## [1.0.3] - 2024-09-07

### Maintenance

- Restore minified package builds.
- Correct cleanup ordering and simplify linting, TypeScript exclusions, and editor configuration.

## [1.0.2] - 2024-09-07

### Documentation

- Clarify that the listed ECMAScript versions are supported detection targets.

### Maintenance

- Refresh development dependencies, including Vitest 2, and pnpm; use rimraf in the cleanup script.
- Update GitHub release and metadata actions and allow manual metadata synchronization.

## [1.0.1] - 2024-06-08

### Fixed

- Locate the installed `es-check` executable relative to the package instead of relying on command lookup, fixing detection in installed CLI and library contexts.

### Maintenance

- Disable minification in package builds.
- Include the MIT license text in the package.

## [1.0.0] - 2024-06-08

### Added

- Detect the minimum compatible ECMAScript syntax version from ES5 through ES13/ES2022, including modules and files with hashbangs.
- Provide the `es-check-min <file>` CLI with help/version flags, detected-version output, and an error message plus exit status 1 when no supported version accepts the input.
- Export asynchronous `esCheckMin(path)` and the `EsVersion` type as an ESM library with TypeScript declarations for Node.js 20+, returning `undefined` when detection fails.

### Documentation

- Document npx and local/global npm installation, supported detection targets and limitations, and CLI/library usage with an example.

### Maintenance

- Set up TypeScript builds, shared linting and formatting, detection tests, and GitHub release and metadata workflows.

[1.0.0]: https://github.com/kitschpatrol/es-check-min/releases/tag/v1.0.0
[1.0.1]: https://github.com/kitschpatrol/es-check-min/compare/v1.0.0...v1.0.1
[1.0.2]: https://github.com/kitschpatrol/es-check-min/compare/v1.0.1...v1.0.2
[1.0.3]: https://github.com/kitschpatrol/es-check-min/compare/v1.0.2...v1.0.3
[1.0.4]: https://github.com/kitschpatrol/es-check-min/compare/v1.0.3...v1.0.4
[1.0.5]: https://github.com/kitschpatrol/es-check-min/compare/v1.0.4...v1.0.5
[1.0.6]: https://github.com/kitschpatrol/es-check-min/compare/v1.0.5...v1.0.6
[1.0.7]: https://github.com/kitschpatrol/es-check-min/compare/v1.0.6...v1.0.7
[1.0.8]: https://github.com/kitschpatrol/es-check-min/compare/v1.0.7...v1.0.8
[1.0.9]: https://github.com/kitschpatrol/es-check-min/compare/v1.0.8...v1.0.9
[1.0.10]: https://github.com/kitschpatrol/es-check-min/compare/v1.0.9...v1.0.10
[1.0.11]: https://github.com/kitschpatrol/es-check-min/compare/v1.0.10...v1.0.11
[1.0.12]: https://github.com/kitschpatrol/es-check-min/compare/v1.0.11...v1.0.12
[1.0.13]: https://github.com/kitschpatrol/es-check-min/compare/v1.0.12...v1.0.13
[1.0.14]: https://github.com/kitschpatrol/es-check-min/compare/v1.0.13...v1.0.14
