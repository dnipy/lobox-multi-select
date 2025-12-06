import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "lobox-multi-select",
  plugins: [react()],
  resolve: {
    alias: {
      "@Shared": path.resolve(__dirname, "src/components/index.ts"),
    },
  },
});
