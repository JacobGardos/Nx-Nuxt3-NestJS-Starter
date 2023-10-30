// eslint-disable-next-line @nx/enforce-module-boundaries
import { validateRootEnv } from '../../../libs/env/src';

export const validateEnv = (dirtyEnv: any) => {
  const rootEnv = validateRootEnv(dirtyEnv);
  return {
    rootEnv,
  };
};

const env = validateEnv(process.env);

export default env;
