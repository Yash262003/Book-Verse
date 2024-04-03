import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // headers: {
  //   'Content-Type': 'application/json;charset=UTF-8',
  //   'Access-Control-Allow-Origin': '*' // Could work and fix the previous problem, but not in all APIs
  // },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://book-verse-backend-yash262003.vercel.app/',
  //       changeOrigin: true,
  //       // rewrite: (path) => path.replace(/^\/api/, ''),
  //     },
  //   }
  // }
})
