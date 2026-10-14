import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';

const fromRoot = (path: string): string => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@app': fromRoot('./src/app'),
      '@core': fromRoot('./src/core'),
      '@data': fromRoot('./src/data'),
      '@documents': fromRoot('./src/documents'),
      '@domain': fromRoot('./src/domain'),
      '@features': fromRoot('./src/features'),
      '@shared': fromRoot('./src/shared'),
      '@state': fromRoot('./src/state')
    }
  },
  build: {
    rollupOptions: {
      input: {
        landing: fromRoot('./index.html'),
        app: fromRoot('./app.html')
      }
    }
  }
});
