import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { resolve } from 'path';
import { Todo } from './todo.entity';

const root = resolve(__dirname, '..');

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: `${root}/db/todo-list`,
      // database: ":memory:",
      // dropSchema: true,
      synchronize: true,
      entities: [ Todo ],
      logging: true
    }),
    TypeOrmModule.forFeature([ Todo ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
