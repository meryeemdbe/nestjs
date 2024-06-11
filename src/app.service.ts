import { Injectable } from '@nestjs/common';

@Injectable() // this is a decorator: special declaration to make the class attached to a provider
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
