# React + Vite + Jotai

This project provides a minimal setup for React in Vite with Hot Module Replacement (HMR), ESLint rules, and lightweight global state management using **Jotai** (an atomic state management library).

## Technologies Used

- **React 18**  
- **Vite** — ultra-fast development server and build tool  
- **Jotai** — modern, minimal, and TypeScript-friendly state management library  
- **TypeScript** (highly recommended for production)  
- **ESLint** — with basic rules  

## Official Vite Plugins

Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for even faster Fast Refresh

## React Compiler

The React Compiler is **not enabled** in this template due to its impact on development and build performance.  
To add it, follow [the official documentation](https://react.dev/learn/react-compiler/installation).

## Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn
# or
pnpm install