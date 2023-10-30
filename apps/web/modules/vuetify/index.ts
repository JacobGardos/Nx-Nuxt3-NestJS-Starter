import { addBuildPlugin, addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit';
import defu from 'defu';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtModule({
  meta: {
    name: 'vuetify',
  },
  setup(resolvedOptions, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    addPlugin(resolve('./runtime/plugin'));

    addBuildPlugin({
      vite() {
        return vuetify({ autoImport: true });
      },
    });

    nuxt.options.build.transpile.push('vuetify');
    nuxt.options.vite.vue = defu(nuxt.options.vite.vue, {
      template: {
        transformAssetUrls,
      },
    });
  },
});
