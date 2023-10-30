import env from './env';

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  devServer: {
    port: 3001,
  },
  nitro: {
    devProxy: {
      [`${env.rootEnv.API_PREFIX}`]: {
        target: `http://localhost:${env.rootEnv.API_PORT}${env.rootEnv.API_PREFIX}`,
      },
    },
  },
});
