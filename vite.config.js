import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Images under 4 KB stay as files so every screenshot is served as an optimised .webp
  build: { assetsInlineLimit: 0 },
})
