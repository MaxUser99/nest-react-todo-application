import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Todo } from './todo.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/todos')
  async getTodos(): Promise<Todo[]> {
    return this.appService.getTodos();
  }
}
