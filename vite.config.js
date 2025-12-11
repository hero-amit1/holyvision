import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    visualizer({ open: true })
  ],

  build: {
    chunkSizeWarningLimit: 1500, // remove 500kb warning

    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split React
          if (id.includes('react')) return 'react-vendor';

          // Split node_modules into separate chunk
          if (id.includes('node_modules')) return 'vendor';

          // Allow Vite to handle the rest
        }
      }
    }
  }
})
