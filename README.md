# Corporate Asset & Requisition System Project 

เป็นระบบสำหรับบริษัท เพื่อให้พนักงานเบิกอุปกรณ์ (Laptop, Monitor, Mouse) โดยมีหัวหน้าคอยอนุมัติ และ Admin เป็นคนจัดการ Stock

## 🚀 Tech Stack

- **Vite** - Build tool ที่เร็วและทันสมัย
- **React** + **TypeScript** - UI Framework พร้อม Type Safety
- **Shadcn/ui** - Component library ที่สวยงามและ customizable
- **Tailwind CSS** - Utility-first CSS framework
- **TanStack Router** - Type-safe routing solution
- **TanStack Query** - Powerful data synchronization สำหรับ React
- **Axios** - HTTP client สำหรับ API calls

## 📦 การติดตั้ง

```bash
# ติดตั้ง dependencies
pnpm install
```

## 🏃‍♂️ การรันโปรเจกต์

```bash
# รันในโหมด development
pnpm run dev

# Build สำหรับ production
pnpm run build

# Preview production build
pnpm run preview

# Lint code
pnpm run lint
```

## 📁 โครงสร้างโปรเจกต์

```
- Waiting.....
```

## 📝 Features

- ✅ TypeScript support
- ✅ Modern build tool (Vite)
- ✅ Type-safe routing (TanStack Router)
- ✅ Data fetching & caching (TanStack Query)
- ✅ Beautiful UI components (Shadcn/ui)
- ✅ Utility-first styling (Tailwind CSS)
- ✅ HTTP client setup (Axios)

## 📚 Documentation

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TanStack Router](https://tanstack.com/router)
- [TanStack Query](https://tanstack.com/query)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
