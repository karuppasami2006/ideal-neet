import { defineConfig } from 'vite'

export default defineConfig({
  // Minimal config for Vanilla JS project
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist'
  }
})
