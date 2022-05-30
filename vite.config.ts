import { defineConfig } from 'vite';

// @ts-ignore
import litcss from 'rollup-plugin-postcss-lit';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    lib: {
      entry: './src/game.ts',
      formats: ['es']
    }
  },
  plugins: [
    {
      ...litcss(),
      enforce: 'post'
    }
  ]
});
