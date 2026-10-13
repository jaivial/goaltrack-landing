import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  base: '/goaltrack-landing/',
  plugins: [svelte()],
  build: { target: 'es2019' }
})
