# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

TypeScript monorepo boilerplate using **pnpm 10.10.0** workspaces + **Turborepo**. Three runnable services and shared packages. See `README.md` for full structure and available scripts (`pnpm dev`, `pnpm build`, `pnpm lint`, `pnpm test`, etc.).

### Services

| Service | Port | Dev command (from root) |
|---|---|---|
| Next.js app | 3000 | `pnpm dev` (starts all) or `pnpm --filter ts-monorepo-boilerplate-nextjs dev` |
| React+Vite app | 5173 | `pnpm dev` (starts all) or `pnpm --filter ts-monorepo-boilerplate-react dev` |
| NestJS backend | 3001 | `pnpm dev` (starts all) or `pnpm --filter ts-monorepo-boilerplate-service dev` |

### Non-obvious gotchas

- **ESLint legacy config**: All packages use `.eslintrc.cjs` (legacy format) but depend on ESLint 9+. You must set `ESLINT_USE_FLAT_CONFIG=false` before running `pnpm lint`, otherwise ESLint will fail looking for `eslint.config.js`. Example: `ESLINT_USE_FLAT_CONFIG=false pnpm lint`.
- **pnpm build scripts**: pnpm 10 blocks build scripts by default. After `pnpm install`, run `pnpm rebuild esbuild @nestjs/core unrs-resolver` to ensure platform-specific binaries (esbuild especially) are available.
- **No test files**: This is a boilerplate — no `.spec.ts` or `.test.ts` files exist yet. `pnpm test` will fail due to "no tests found" in the NestJS service (Jest) and shared package (Vitest). Use `--passWithNoTests` (Jest) or configure vitest accordingly when adding tests.
- **No database required**: Despite `.env.example` listing PostgreSQL variables, no ORM or DB driver is installed. The NestJS service runs without a database.
- **`.env` file**: Copy `.env.example` to `.env` at the workspace root before running. The dev servers read from it.
- **NestJS service uses `ts-node/esm` loader**: The dev command starts with `node --loader ts-node/esm`, not `nest start --watch`. The `build:watch` (nest build --watch) runs in parallel for type checking.
