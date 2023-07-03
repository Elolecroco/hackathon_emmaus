import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      target: 'https://localhost:5080/api',
    },
  }
  , plugins: [react()],
})
