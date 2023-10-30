import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { ConfigService } from './config.service';
import { validateEnv } from './env.validate';

@Module({
  imports: [
    NestConfigModule.forRoot({
      validate: validateEnv,
    }),
  ],
  exports: [ConfigService],
  providers: [ConfigService],
})
export class ConfigModule {}
