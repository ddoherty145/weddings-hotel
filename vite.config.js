import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import process from 'process'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 4000,
    host: true // This allows access from other devices on the network
  },
  preview: {
    port: process.env.PORT || 4000,
    host: true
  }
})
