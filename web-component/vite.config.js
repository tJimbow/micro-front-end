import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import replace from '@rollup/plugin-replace'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/register.js'),
      name: 'ProductList',
      fileName: 'product-list',
      formats: ['es'],
    },
  },
})
