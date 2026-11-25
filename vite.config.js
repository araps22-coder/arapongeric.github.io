import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages at username.github.io/repo-name, set base: '/repo-name/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
