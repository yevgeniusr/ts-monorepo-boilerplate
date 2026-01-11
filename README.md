# TypeScript Monorepo Boilerplate

This template provides a complete monorepo structure with Next.js apps, React (Vite) apps, Nest.js services, and shared packages. It includes all necessary configurations for Docker, linting, TypeScript, and build tooling.

## ⚠️ Important: Replace These Keywords

Before using this template, you **MUST** replace the following keywords throughout the codebase:

### Keywords to Replace:

1. **`ts-monorepo-boilerplate`** - Replace with your actual project name
   - Used in: package names, workspace references, app titles, descriptions
   - Example: `ts-monorepo-boilerplate` → `my-awesome-project`

2. **`@ts-monorepo-boilerplate/*`** - Replace with your package scope
   - Used in: all package.json files, import statements, workspace references
   - Example: `@ts-monorepo-boilerplate/common` → `@my-project/common`

3. **`TypeScript Monorepo Boilerplate`** - Replace with your project description
   - Used in: package.json descriptions, metadata

4. **`Your Name`** - Replace with your actual name
   - Used in: package.json author field

### Quick Find & Replace:

Use your IDE's find-and-replace feature to replace:
- `ts-monorepo-boilerplate` → `your-project-name`
- `@ts-monorepo-boilerplate` → `@your-scope`
- `TypeScript Monorepo Boilerplate` → `Your Project Description`
- `Your Name` → `Your Actual Name`

**Note:** This template is fully functional as-is for testing, but you should customize it for your project.

## Structure

```
template/
├── apps/
│   ├── nextjs-app/          # Next.js application template
│   └── react-app/            # React (Vite) application template
├── services/
│   └── nestjs-service/       # Nest.js backend service template
├── packages/
│   └── shared-package/       # Shared TypeScript package template
├── docker/                   # Docker configuration templates
├── configs/                  # Shared configuration files
│   ├── eslint/              # ESLint configurations
│   ├── typescript/          # TypeScript configurations
│   └── prettier/            # Prettier configuration
├── package.json             # Root package.json template
├── turbo.json               # Turborepo configuration
└── pnpm-workspace.yaml      # PNPM workspace configuration
```

## Features

- **Next.js App**: Full Next.js 14 setup with TypeScript, Tailwind CSS, ESLint, and Vitest
- **React App**: Vite-based React app with TypeScript, Tailwind CSS, ESLint, and Vitest
- **Nest.js Service**: Complete Nest.js backend service with TypeScript, Jest, and ESLint
- **Shared Package**: Reusable TypeScript package for shared code
- **Docker**: Dockerfiles for backend, Next.js, and Vite apps
- **Linting**: ESLint configurations for Next.js, services, and libraries
- **TypeScript**: TypeScript configs for different project types
- **Turborepo**: Pre-configured Turborepo pipeline

## How to Use This Template

### 1. Copy the Template

Copy the entire `template` folder to your new project root, or copy specific templates as needed.

### 2. Replace Keywords

**⚠️ IMPORTANT:** This template uses `ts-monorepo-boilerplate` as a placeholder. You MUST replace it with your project name.

#### Keywords to Replace:

1. **`ts-monorepo-boilerplate`** → Your project name
   - Used in: package names, workspace references, app titles
   - Example: `ts-monorepo-boilerplate` → `my-awesome-project`

2. **`@ts-monorepo-boilerplate/*`** → Your package scope
   - Used in: all package.json files, import statements
   - Example: `@ts-monorepo-boilerplate/common` → `@my-project/common`

3. **`TypeScript Monorepo Boilerplate`** → Your project description
   - Used in: package.json descriptions, metadata

4. **`Your Name`** → Your actual name
   - Used in: package.json author field

#### Quick Find & Replace:

Use your IDE's find-and-replace (case-sensitive) to replace:
- `ts-monorepo-boilerplate` → `your-project-name`
- `@ts-monorepo-boilerplate` → `@your-scope`
- `TypeScript Monorepo Boilerplate` → `Your Project Description`
- `Your Name` → `Your Actual Name`
- `Test application` - Application description
- `test-service` - Service name

You can use a find-and-replace tool to replace these placeholders across all files.

### 3. Set Up Shared Config Packages

Before using the templates, you need to create the shared config packages in your monorepo:

#### Create `packages/eslint-config`

```bash
mkdir -p packages/eslint-config
```

Copy the files from `template/configs/eslint/` to `packages/eslint-config/` and create a `package.json`:

```json
{
  "name": "@repo/eslint-config",
  "version": "0.0.0",
  "files": [
    "base.js",
    "next.js",
    "service.js",
    "library.js",
    "partials"
  ],
  "license": "MIT",
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^7.9.0",
    "@typescript-eslint/parser": "^7.9.0",
    "@vercel/style-guide": "^6.0.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-config-turbo": "^1.13.3",
    "eslint-plugin-only-warn": "^1.1.0",
    "eslint-plugin-unused-imports": "^3.2.0",
    "typescript": "^5.4.5"
  }
}
```

#### Create `packages/typescript-config`

```bash
mkdir -p packages/typescript-config
```

Copy the files from `template/configs/typescript/` to `packages/typescript-config/` and create a `package.json`:

```json
{
  "name": "@repo/typescript-config",
  "version": "0.0.0",
  "private": true,
  "license": "MIT"
}
```

### 4. Copy Root Configuration Files

Copy these files from the template to your project root:

- `package.json` (update placeholders)
- `turbo.json`
- `pnpm-workspace.yaml`
- `.prettierrc.json` (from `configs/prettier/`)

### 5. Create Your Apps/Services/Packages

#### Adding a Next.js App

1. Copy `apps/nextjs-app/` to `apps/your-app-name/`
2. Update `package.json` with your app name
3. Replace `test-app` placeholders in all files
4. Update paths in `tsconfig.json` and `vite.config.ts` if needed

#### Adding a React (Vite) App

1. Copy `apps/react-app/` to `apps/your-app-name/`
2. Update `package.json` with your app name
3. Replace `test-app` placeholders in all files
4. Update paths in `tsconfig.json` and `vite.config.ts` if needed

#### Adding a Nest.js Service

1. Copy `services/nestjs-service/` to `services/your-service-name/`
2. Update `package.json` with your service name
3. Replace `test-service` placeholders in all files
4. Update Dockerfile if using (replace `test-service`)

#### Adding a Shared Package

1. Copy `packages/shared-package/` to `packages/your-package-name/`
2. Update `package.json` with your package name
3. Update imports in apps/services that use this package

### 6. Install Dependencies

```bash
pnpm install
```

### 7. Update Dockerfiles

If using Docker, update the Dockerfiles in `docker/`:

- Replace `test-service` with your actual service name
- Replace `test-app` with your actual app name
- Update environment variables as needed
- Update paths if your structure differs

## Configuration Details

### ESLint

The template includes ESLint configurations for:
- **Next.js apps**: Uses Vercel's style guide
- **Services**: Node.js backend configuration
- **Libraries**: Shared package configuration

All configs extend from `@repo/eslint-config` which should be set up first.

### TypeScript

TypeScript configurations are provided for:
- **Base**: Common settings for all projects
- **Next.js**: Next.js-specific settings
- **Service**: Backend service settings
- **Library**: Shared package settings

### Docker

Three Dockerfiles are included:
- `Dockerfile.backend`: For Nest.js services
- `Dockerfile.web`: For Next.js applications
- `Dockerfile.frontend`: For Vite/React applications

### Turborepo

The `turbo.json` includes pipelines for:
- `build`: Builds all packages/apps/services
- `lint`: Lints all code
- `test`: Runs tests
- `type:check`: Type checks TypeScript
- `dev`: Development mode (no caching)
- `clean`: Cleans build artifacts

## Scripts

### Root Level

- `pnpm dev`: Start all apps/services in development mode
- `pnpm build`: Build all packages
- `pnpm lint`: Lint all code
- `pnpm test`: Run all tests
- `pnpm type:check`: Type check all TypeScript
- `pnpm format`: Format all code with Prettier

### App/Service Level

Each app/service has its own scripts defined in their `package.json`:
- `dev`: Development mode
- `build`: Production build
- `lint`: Lint code
- `test`: Run tests
- `type:check`: Type check

## Best Practices

1. **Always update placeholders**: Make sure to replace all `{{PLACEHOLDER}}` values
2. **Keep configs in sync**: When updating shared configs, ensure all apps/services use them
3. **Use workspace protocol**: Always use `workspace:*` for internal package dependencies
4. **Update Docker paths**: Ensure Dockerfiles point to correct app/service paths
5. **Test after setup**: Run `pnpm install` and `pnpm build` to verify everything works

## Troubleshooting

### TypeScript Errors

If you see TypeScript errors about missing types:
1. Ensure `@repo/typescript-config` is installed
2. Check that `tsconfig.json` extends the correct config
3. Run `pnpm install` to ensure all dependencies are linked

### ESLint Errors

If ESLint can't find configs:
1. Ensure `@repo/eslint-config` is installed
2. Check that `.eslintrc.cjs` extends the correct config
3. Verify the eslint-config package exports the right files

### Build Errors

If builds fail:
1. Check that all workspace dependencies are installed
2. Verify `pnpm-workspace.yaml` includes all package paths
3. Ensure `turbo.json` pipeline is correctly configured

## Next Steps

After setting up your monorepo:

1. Add your application code to the respective app/service folders
2. Configure environment variables (`.env` files)
3. Set up CI/CD pipelines
4. Configure deployment (Docker, Vercel, etc.)
5. Add additional packages/services as needed

## Notes

- This template uses **pnpm** as the package manager
- **Turborepo** is used for build orchestration
- All templates assume **TypeScript** and **ESM** modules
- Dockerfiles use **Node 22** as the base image
- Default ports: 3000 (apps), 3000 (services) - adjust as needed
