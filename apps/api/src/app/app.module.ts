import { Module } from '@nestjs/common';
import { ConditionalModule } from '@nestjs/config';
import { ConfigModule } from '../config/config.module';
import { SpaModule } from '../spa/spa.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule,
    ConditionalModule.registerWhen(
      SpaModule,
      (env: NodeJS.ProcessEnv) => env.NODE_ENV === 'production'
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
