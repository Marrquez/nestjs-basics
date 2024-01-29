import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // based on the return value, nestjs will infer the type of return,
  // althoug we can specify a particular return type, in this case, the Content-Type header
  // will be set as text/html since we are returning a string/plain text
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
