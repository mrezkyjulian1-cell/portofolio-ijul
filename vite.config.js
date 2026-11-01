import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages serves the site from /portofolio-ijul/, while Vercel and local dev serve from root (/).
// GITHUB_ACTIONS is automatically set to "true" inside the GitHub Pages deploy workflow.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/portofolio-ijul/' : '/',
})
