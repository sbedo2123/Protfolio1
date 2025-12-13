import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Protfolio1/',  // لازم يكون اسم الريبو على GitHub مع / في البداية والنهاية
  plugins: [react()],
})
