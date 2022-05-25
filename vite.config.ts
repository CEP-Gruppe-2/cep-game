import { defineConfig } from 'vite'

// @ts-ignore
import litcss from 'rollup-plugin-postcss-lit';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'index.html',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  },
  plugins: [
    {
      ...litcss(),
      enforce: 'post'
    }
  ]
})
