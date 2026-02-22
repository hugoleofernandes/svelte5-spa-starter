# Svelte 5 SPA Starter

A minimal starter template for Svelte 5 (Runes) projects with essential tooling pre-configured.

This repository helps you quickly bootstrap a new frontend project without repeating the same setup steps.

---

## Included

- Svelte 5 (Runes API)
- SvelteKit
- TypeScript
- TailwindCSS v4
- @sveltejs/adapter-static (SPA mode)
- ESLint (flat config)
- Prettier
- Husky + lint-staged (pre-commit hooks)

---

## Purpose

This template exists to:

- Avoid repetitive setup
- Ensure consistent code quality
- Provide a clean starting point for new projects

---

## Usage

1. Click **"Use this template"** on GitHub
2. Create a new repository
3. Install dependencies:

```bash
pnpm install
```

4. Start development:

```bash
pnpm dev
```

---

## Available Scripts

Run development server:

```bash
pnpm dev
```

Run lint:

```bash
pnpm lint
```

Format code:

```bash
pnpm format
```

Build:

```bash
pnpm build
```

Preview production build:

```bash
pnpm preview
```

---

## Notes

- Configured for SPA deployment
- TailwindCSS v4 integrated
- Prettier runs on save
- Commits are validated with Husky
