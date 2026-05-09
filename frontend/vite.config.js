import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
    strictPort: false,
    allowedHosts: [
      'all',
      '.railway.app',
      'team-task-manager-production-0a7c.up.railway.app'
    ]
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false
  }
})