import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHelloWorld(): Promise<{ message: string; timestamp: number }> {
    const timestamp = +new Date();

    console.log('Ran Hello World', timestamp);
    return { message: 'Hello World From Nest API', timestamp };
  }
}
