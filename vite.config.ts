import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { ghPages } from "vite-plugin-gh-pages";

// https://vite.dev/config/
export default defineConfig({
  base: "/lobox-multi-select/",
  plugins: [react(), ghPages()],
  resolve: {
    alias: {
      "@Shared": path.resolve(__dirname, "src/components/index.ts"),
    },
  },
});
