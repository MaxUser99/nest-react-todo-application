import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Todo) private todoRepo: Repository<Todo>) {}

  async getTodos(): Promise<Todo[]> {
    return this.todoRepo.find();
  }

  getHello(): string {
    return 'Hello World!';
  }
}
