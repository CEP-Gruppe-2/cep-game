import { svelte } from '@sveltejs/vite-plugin-svelte';
import { clientPlugin, defineConfig } from '@vitebook/client/node';
import { defaultThemePlugin, DefaultThemeConfig } from '@vitebook/theme-default/node';

export default defineConfig<DefaultThemeConfig>({
  include: ['src/**/*.story.html', 'src/**/*.story.svelte'],
  vite: {
    optimizeDeps: {
      include: ['lit', 'lit/decorators.js']
    }
  },
  plugins: [
    clientPlugin({ appFile: 'App.svelte', include: /\.(html|svelte)($|\?)/ }),
    defaultThemePlugin(),
    svelte({
      compilerOptions: { hydratable: true },
      extensions: ['.html', '.svelte'],
      experimental: { useVitePreprocess: true }
    })
  ],
  site: {
    title: 'CEP Game',
    description: '',
    theme: {},
  },
});
