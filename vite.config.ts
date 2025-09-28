import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@native-render/core": path.resolve(__dirname, "src/core/index.ts"),
    },
  },
});