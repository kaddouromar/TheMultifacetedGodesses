import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    // standalone.html uses inline JSX via CDN; only scan the real app entry.
    entries: ["index.html"],
  },
  build: {
    rollupOptions: {
      input: "index.html",
    },
  },
  server: {
    port: 5173,
    strictPort: false,
  },
});

