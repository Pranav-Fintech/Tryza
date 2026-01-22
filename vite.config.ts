import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Tryza/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
