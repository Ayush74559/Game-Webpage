import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const API_PORT = process.env.API_PORT || '5174'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js'
  },
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${API_PORT}`,
        changeOrigin: true
      }
    }
  }
})
