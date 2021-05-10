import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{//路径
      '@':resolve(__dirname,"src")
    }
  },
  base:'./',
  server:{
    host:'localhost',
    port:8888,
    open:true
  }
})
