import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { isEven } from '@org/is-even';
import { AppModule } from './app/app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.setGlobalPrefix(config.env('rootEnv.API_PREFIX'));
  await app.listen(config.env('rootEnv.API_PORT'));
  const url = await app.getUrl();
  Logger.log(`🚀 Application is running on: ${url}`);
  Logger.verbose('Got shared library is-even', isEven());
}

bootstrap();
