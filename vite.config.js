import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'process'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 4000,
    host: '0.0.0.0', // Bind to all network interfaces
    strictPort: true // Exit if port is in use
  },
  preview: {
    port: process.env.PORT || 4000,
    host: '0.0.0.0',
    strictPort: true
  }
})
