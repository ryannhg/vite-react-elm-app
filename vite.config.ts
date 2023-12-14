import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import elm from 'vite-plugin-elm-watch'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    elm({ output: 'react' })
  ],
})
