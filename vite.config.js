import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main:    resolve(__dirname, 'index.html'),
        about:   resolve(__dirname, 'about.html'),
        programs: resolve(__dirname, 'programs.html'),
        abroad:  resolve(__dirname, 'abroad.html'),
        contact: resolve(__dirname, 'contact.html'),
        'feature-details': resolve(__dirname, 'feature-details.html'),
      }
    }
  }
})
