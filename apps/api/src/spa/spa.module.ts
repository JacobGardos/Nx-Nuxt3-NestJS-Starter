import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as upath from 'upath';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: upath.join(__dirname, '..', 'web'),
    }),
  ],
})
export class SpaModule {}
