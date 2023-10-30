import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService, Path, PathValue } from '@nestjs/config';
import { Env } from './env.validate';

@Injectable()
export class ConfigService extends NestConfigService<Env, true> {
  constructor(internalConfig: Record<string, any>) {
    super(internalConfig);
  }

  /**
   * Get an env value and infer it's type
   * based on property path (you can use dot notation to traverse nested object, e.g. "database.host").
   */
  env<P extends Path<Env>, R = PathValue<Env, P>>(propertyPath: P): ExcludeUndefinedIf<true, R> {
    return super.get(propertyPath, { infer: true });
  }
}

// Taken For @nestjs/config source
type ExcludeUndefinedIf<ExcludeUndefined extends boolean, T> = ExcludeUndefined extends true
  ? Exclude<T, undefined>
  : T | undefined;
