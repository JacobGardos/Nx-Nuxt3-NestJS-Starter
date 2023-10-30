import { defineNuxtModule, installModule } from '@nuxt/kit';
import type { ModuleOptions as EslintModuleOptions } from '@nuxtjs/eslint-module';
import NuxtEslintModule from '@nuxtjs/eslint-module';
import { workspaceRoot } from '@nx/devkit';
import defu from 'defu';
import * as upath from 'upath';
import { getAliases } from './getAliases';

export default defineNuxtModule({
  meta: {
    name: 'nx',
  },
  hooks: {
    // Fixes the issues where vite doesn't use the root node_modules to place its cache files
    'vite:extendConfig'(config) {
      config.cacheDir = upath.join(workspaceRoot, 'node_modules/.cache/vite');
    },
  },
  async setup(resolvedOptions, nuxt) {
    // Enables Type Checking On The Nuxt Server
    nuxt.options.typescript.typeCheck = true;

    // Adds the tsconfig.base.json paths to the Nuxt tsconfig
    nuxt.options.alias = defu(nuxt.options.alias, getAliases());

    // Set the output directory to the dist/apps/web
    nuxt.options.nitro.output = defu(nuxt.options.nitro.output, {
      // dir: upath.join(workspaceRoot, 'dist/apps/web'),
      publicDir: upath.join(workspaceRoot, 'dist/apps/web'),
    });

    // Install The Eslint Module
    await installModule(NuxtEslintModule, {
      ignorePath: upath.join(workspaceRoot, '.gitignore'),
      useEslintrc: true,
    } satisfies EslintModuleOptions);
  },
});
