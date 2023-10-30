import { validateRootEnv } from '@org/env';

export const validateEnv = (dirtyEnv: any) => {
  const rootEnv = validateRootEnv(dirtyEnv);
  return {
    rootEnv,
  };
};

export type Env = ReturnType<typeof validateEnv>;
