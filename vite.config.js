import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  // esbuild: {
  //   drop: ["debugger"],
  //   pure: ["console.log", "console.error", "console.warn", "console.debug", "console.trace"],
  // },
})
