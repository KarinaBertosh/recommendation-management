import {
  Controller,
  Post,
  Body,
  Get,
} from '@nestjs/common';

import { UsersService } from './user.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async getAllUsers() {
    return await this.usersService.getUsers();
  }

  @Post('/reg')
  async addUser(
    @Body('email') prodEmail: string,
    @Body('password') prodPass: string,
  ) {
    const newUser = await this.usersService.registration(
      prodEmail,
      prodPass,
    );
    return newUser;
  }

  @Post('/login')
  async getUserByEmail(
    @Body('email') prodEmail: string,
    @Body('password') prodPass: string,) {
    return await this.usersService.login(prodEmail, prodPass);
  }
}
