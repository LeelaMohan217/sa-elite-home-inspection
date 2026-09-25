import { copyFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Static hosts (Netlify, Cloudflare Pages, GitHub Pages, Surge) serve
// 404.html for any address they can't find. Making it a copy of the app
// means a broken link still gets the site's own "Page not found" page, and
// direct links to real pages such as /about still load.
function spaNotFound() {
  let outDir = 'dist'
  return {
    name: 'spa-404',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    async closeBundle() {
      await copyFile(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), spaNotFound()],
})
