import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: ".",
  resolve: {
    alias: {
      "@nativescript/core": path.resolve(__dirname, "native-web-js/core"),
      "@nativescript/ui": path.resolve(__dirname, "native-web-js/ui"),
      "@nativescript/animation": path.resolve(__dirname, "native-web-js/animation")
      // adicione outros pacotes NativeScript se necessário
    }
  },
  build: {
    outDir: 'App_Resources/web',
    rollupOptions: {
      input: path.resolve(__dirname, "index.html")
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
    exclude: ['@nativescript/core', '@nativescript/ui', '@nativescript/animation']
  }
});
