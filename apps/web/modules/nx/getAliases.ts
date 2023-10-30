import { workspaceRoot } from '@nx/devkit';
import * as upath from 'upath';

export function getAliases() {
  const tsConfigBasePath = upath.join(workspaceRoot, 'tsconfig.base.json');

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const tsPaths = require(tsConfigBasePath)?.compilerOptions?.paths as Record<string, string[]>;
  const alias: Record<string, string> = {};
  if (tsPaths) {
    for (const p in tsPaths) {
      alias[p.replace(/\/\*$/, '')] = upath.join(workspaceRoot, tsPaths[p][0].replace(/\/\*$/, ''));
    }
  }
  return alias;
}
