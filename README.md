# Phanes Frontend

Frontend application built with **Svelte 5 (Runes)** using a modern SPA architecture.

---

## 🚀 Tech Stack

- **Svelte 5 (Runes API)**
- **SvelteKit**
- **TypeScript**
- **TailwindCSS v4**
- **Adapter Static (SPA mode)**
- **ESLint (flat config)**
- **Prettier**
- **Husky + lint-staged (pre-commit hooks)**

---

## 🧠 Architecture

This project uses:

- Runes-based reactivity (`$state`, `$derived`, `$effect`)
- Static adapter configured for SPA deployment
- Strict linting and formatting rules
- Automated code quality enforcement on commit

---

## 🔒 Code Quality

### ESLint

- Flat configuration
- TypeScript support
- Svelte 5 compatible rules
- No rule conflicts with Prettier

### Prettier

- Automatic formatting on save
- Enforced via pre-commit hook

### Husky + lint-staged

- Prevents commits with lint or formatting errors
- Ensures clean and consistent repository history

---

## 🛠 Development

Install dependencies:

    pnpm install

---

Run dev server:

    pnpm dev

---

Run lint:

    pnpm lint

---

Format code:

    pnpm format

---
