import { cleanEnv, num, str } from 'envalid';

export const validateRootEnv = (dirtyEnv: any) =>
  cleanEnv(dirtyEnv, {
    /**
     * The environment the application is running in
     */
    NODE_ENV: str({
      desc: 'The environment the application is running in',
      choices: ['development', 'production', 'test'],
    }),
    /**
     * The port the API will listen on
     */
    API_PORT: num({
      desc: 'The port the API will listen on',
    }),
    /**
     * The global prefix for all API routes
     */
    API_PREFIX: str({
      desc: 'The global prefix for all API routes',
    }),
  });

export type RootEnv = ReturnType<typeof validateRootEnv>;
