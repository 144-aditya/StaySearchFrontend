import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://staysearch-api.onrender.com',  // ✅ Change to Render backend
        changeOrigin: true,
        secure: true
      }
    }
  }
})