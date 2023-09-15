import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './user/user.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost:27017/recommendations')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
