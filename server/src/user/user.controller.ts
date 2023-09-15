import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { UsersService } from './user.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async addUser(
    @Body('email') prodEmail: string,
    @Body('password') prodPass: string,
  ) {
    const generatedId = await this.usersService.insertUser(
      prodEmail,
      prodPass,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllUsers() {
    return await this.usersService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') userId: string) {
    return this.usersService.getSingleUser(userId);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') userId: string,
    @Body('email') prodEmail: string,
    @Body('password') prodPass: string,
    @Body('price') prodPrice: number,
  ) {
    return await this.usersService.updateUser(userId, prodEmail, prodPass);
  }

  @Delete(':id')
  async removeUser(@Param('id') userId: string) {
    await this.usersService.deleteUser(userId);
    return null;
  }
}
