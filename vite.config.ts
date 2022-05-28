import { defineConfig } from 'vite';

// @ts-ignore
import litcss from 'rollup-plugin-postcss-lit';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    lib: {
      entry: 'index.ts',
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
});
