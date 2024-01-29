import { Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';

// this controller handle request to: your-domain.com/
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 1) based on the return value, nestjs will infer the type of return,
  // althoug we can specify a particular return type, in this case, the Content-Type header
  // will be set as text/html since we are returning a string/plain text
  // 2) if explicitely we want to add a content type we can use the @Header decorator
  @Get()
  @Header('Content-Type', 'text/html')
  getHello(): string {
    return this.appService.getHello();
  }
}
