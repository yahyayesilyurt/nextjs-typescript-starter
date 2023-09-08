<p align="center">
  <img src="https://images.velog.io/images/henrynoowah/post/93456689-0b3f-4e18-a543-1f8ded385b18/next_TS.png" alt="Next.js TypeScript Starter">
</p>

<br />

<div align="center"><strong>TypeScript starter for Next.js</strong></div>

<br />

## Features

- ⚡️ Next.js 13
- ⚛️ React 18
- 🟦️ TypeScript
- 📏 ESLint — To find and fix problems in your code
- 🌟 Prettier — Code Formatter for consistent style
- 🎌 i18next - Multi-language support
- 🐶 Husky — For running scripts before committing
- 🏴󠁭󠁨󠁬󠁿 Commitlint — To make sure your commit messages follow the convention
- 🖌 Renovate — To keep your dependencies up to date
- 🚦 lint-staged — Run ESLint and Prettier against staged Git files
- 👷 PR Workflow — Run Type Check & Linters on Pull Requests
- ⚙️ EditorConfig - Consistent coding styles across editors and IDEs
- 🗺️ Path Mapping — Import components or images using the `@` prefix

### Development

To download project dependencies, first run this command:

```bash
npm install
```

To start the project locally, run:

```bash
npm run dev
```

Open `http://localhost:3000` with your browser to see the result.

## Documentation

### Requirements

- Node.js >= 12.22.0
- npm >= 8.1.2

### Directory Structure

- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles.

### Scripts

- `npm run dev` — Starts the application in development mode at `http://localhost:3000`.
- `npm run build` — Creates an optimized production build of your application.
- `npm run start` — Starts the application in production mode.
- `npm run type-check` — Validate code using TypeScript compiler.
- `npm run lint` — Runs ESLint for all files in the `src` directory.
- `npm run format` — Runs Prettier for all files in the `src` directory.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import { Button } from '@/components/Button';

// To import images or other files from the public folder
import avatar from '@/public/avatar.png';
```
