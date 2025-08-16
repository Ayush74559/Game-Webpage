import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const API_PORT = process.env.API_PORT || '5174'

export default defineConfig({
  plugins: [react()],
  // Set base for GitHub Pages project site: https://<user>.github.io/<repo>/
  // This ensures asset URLs resolve correctly in production.
  base: '/Game-Webpage/',
  css: {
    postcss: './postcss.config.js'
  },
  server: {
  port: 5173,
    proxy: {
      '/api': {
        target: `http://localhost:${API_PORT}`,
        changeOrigin: true
      }
    }
  }
})
