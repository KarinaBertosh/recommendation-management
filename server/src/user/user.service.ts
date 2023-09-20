import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import { Model } from 'mongoose';
import { PasswordNotCorrect, UserAlreadyExists, UserNotExist } from 'src/errors/errors';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async getUsers() {
    return await this.userModel.find().exec();
  }

  async registration(email: string, password: string) {
    const isExistUser = await this.isExistedUser(email);
    if (!isExistUser) {
      try {
        const newUser = new this.userModel({ email, password });
        return await newUser.save();
      } catch (error) {
        console.log(error);
      }
    } else {
      throw new UserNotExist();
    }
  }

  async login(email: string, password: string) {
    try {
      const isExistedUser = await this.isExistedUser(email);
      if (isExistedUser) {
        const user = await this.findUser(email);
        if (user.password !== password) throw new PasswordNotCorrect();
        return user;
      } else {
        throw new UserNotExist();
      }
    } catch (error) {
      console.log(error);
      throw new UserNotExist();
    }
  }

  async findUser(email: string) {
    return await this.userModel.findOne({ email: email });
  }

  async isExistedUser(email: string) {
    const user = await this.findUser(email);
    return !!user;
  }
}
