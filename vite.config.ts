import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'; // Import path module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { // Add server configuration
    fs: {
      allow: [
        // your project root
        '.',
        // Path to slick-carousel in node_modules
        path.resolve(__dirname, '../node_modules/slick-carousel'), // Adjusted path
        // Add other directories here if Vite blocks them
      ],
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "./src/styles/main.scss" as *;`
      }
    }
  }
}) 