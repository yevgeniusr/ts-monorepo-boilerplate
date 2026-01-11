import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
/// <reference types="vitest" />

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
  ],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './src'),
      '@ts-monorepo-boilerplate/common': path.resolve(__dirname, '../../packages/shared-package/src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
  preview: {
    port: 5173,
  },
  define: {
    // Define process.env to prevent errors
    'process.env': {},
  },
}));
