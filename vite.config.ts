import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: ".",
  resolve: {
    alias: {
      "@nativescript/core": path.resolve(__dirname, "core/web/index.ts")
    }
  },
  build: {
    outDir: 'App_Resources/web',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html")
      },
      external: ['@nativescript/core']
    }
  },
  server: {
    host: true,
    port: 5173
  },
  define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    exclude: ['@nativescript/core']
  }
});
