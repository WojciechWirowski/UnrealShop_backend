import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule} from "./users/users.module";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ItemsModule} from "./items/items.module";
import {QuestionModule} from "./questions/question.module";

@Module({
  imports: [UsersModule, ItemsModule, QuestionModule, TypeOrmModule, TypeOrmModule.forRoot({
    type: 'sqlite',
    database: './database/database.db',
    autoLoadEntities: true,
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
