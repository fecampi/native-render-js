import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@native-web-js/core": "/native-web-js/core",
      "@native-web-js/ui": "/native-web-js/core/ui/frame",
    },
  },
  build: {
    outDir: "App_Resources/web",
    rollupOptions: {
      input: "/index.html",
    },
  },
  server: {
    host: true,
    port: 5173,
  },
  define: {
    global: "globalThis",
  },
  optimizeDeps: {
    exclude: [
      "@native-web-js/core",
      "@native-web-js/ui",
      "@native-web-js/animation",
    ],
  },
});
