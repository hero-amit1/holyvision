import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],

  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 1500,

    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split ONLY big node modules
          if (id.includes("node_modules/react")) {
            return "react-vendor";  // React + ReactDOM
          }
          if (id.includes("node_modules")) {
            return "vendor";        // Other packages
          }
        }
      }
    }
  },

  server: {
    host: true,
    port: 5173
  }
});
