![Banner Img](https://i.imgur.com/t2wwuZV.png)

🚀 **Nx Monorepo Template** 🚀

A comprehensive starter for those looking to set up a Nx monorepo with a Nuxt 3 frontend and a NestJS backend.

---

## 🌟 **Features** 🌟

- 📦 Nx Workspace
- 🎨 Nuxt 3 Frontend
- 🐱‍💻 NestJS API
- 🐳 Dockerized Deployment
- 🚫 ESLint - For linting
- 💅 Prettier - For beautiful code
- 🐶 Husky - Pre-commit hooks magic
- 📄 Lint Staged Files
- 🌌 Vuetify 3 - UI component library

---

## 📂 **Directory Structure** 📂

- `apps/api` - 🐱‍💻 NestJS API
- `apps/web` - 🎨 Nuxt 3 Frontend
- `libs/env` - 🌍 Root environment variables shared between apps.

---

## 🛠 **Setup** 🛠

1. Install nvm (or nvm-windows for Windows users) and set your node version to `18.18.2`.
2. 📄 Create a `.env` file in the root of the project and mirror the content from `.env.example`.
3. 🌎 Install nx globally: `npm install -g nx@latest`.
4. 🍎 macOS users: Update file permissions for Husky's hook files: `chmod ug+x .husky/*` Only needs to be done once.
5. 📥 Run `npm install` from the project root.
6. ☁️ Setup nx cloud cache (optional but recommended): `npx nx connect` in the project root.

---

## 💼 **VSCode Setup** 💼

1. Install the recommended extensions for VSCode.
2. 🌐 Enable [Takeover Mode For Volar Extension](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode).

---

## 🛠 **Development** 🛠

1. Run `nx serve api` - Starts the API server.
2. Run `nx dev web` - Ignites the web server.

---

## 📌 **Pre-Commit Hooks** 📌

Committing code? Husky's got your back! The pre-commit hook in `.husky/pre-commit` will be run by Husky. This triggers lint-staged to ensure linting and formatting on all staged files with Prettier and ESLint. If there's a hiccup, the commit will pause, allowing you to make amends before proceeding.

---

## 🚢 **Deployment (Docker)** 🚢

1. Ensure the Docker daemon is active.
2. Deploy using: `nx run deploy`

---

## 📊 **Project Graph** 📊

Curious about the project's interdependencies? Use `nx graph` and head to the graph website. Click on "Show all projects" to unveil the dependency magic.

---

Happy Coding! 🎉
