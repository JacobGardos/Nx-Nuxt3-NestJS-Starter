import '@mdi/font/css/materialdesignicons.css';
import { defineNuxtPlugin } from 'nuxt/app';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    // ... Config Options
  });
  nuxtApp.vueApp.use(vuetify);
});
