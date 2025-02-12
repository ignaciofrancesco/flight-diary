import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // Replace with your API URL
        changeOrigin: true,
        secure: false, // Set to true if the target uses HTTPS and has a valid certificate
        // rewrite: (path) => path.replace(/^\/api/, ""), // Optional: Rewrite paths
      },
    },
  },
});
