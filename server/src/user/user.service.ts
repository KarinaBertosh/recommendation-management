import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  private users: User[] = [];

  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async insertUser(email: string, password: string) {
    const newUser = new this.userModel({ email, password });
    const result = await newUser.save();
    return result.id;
  }

  async getUsers() {
    return await this.userModel.find().exec();
  }

  async getSingleUser(userId: string) {
    const user = await this.findUser(userId);
    return { id: user.id, email: user.email, password: user.password };
  }

  async updateUser(userId: string, email: string, password: string) {
    const updatedUser = await this.findUser(userId);
    if (email && password) {
      updatedUser.password = password;
    }
    await updatedUser.save();
    return await this.getSingleUser(userId);
  }

  async deleteUser(userId: string) {
    await this.userModel.deleteOne({ _id: userId }).exec();
  }

  async findUser(id: string) {
    let user;
    try {
      user = await this.userModel.findById(id);
    } catch (error) {
      throw new NotFoundException('Could not find user.');
    }
    return user;
  }
}
