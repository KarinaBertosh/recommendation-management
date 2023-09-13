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
  addUser(
    @Body('email') prodEmail: string,
    @Body('password') prodPass: string,
  ) {
    const generatedId = this.usersService.insertUser(
      prodEmail,
      prodPass,
    );
    return { id: generatedId };
  }

  @Get()
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') userId: string) {
    return this.usersService.getSingleUser(userId);
  }

  @Patch(':id')
  updateUser(
    @Param('id') userId: string,
    @Body('email') prodEmail: string,
    @Body('password') prodPass: string,
    @Body('price') prodPrice: number,
  ) {
    this.usersService.updateUser(userId, prodEmail, prodPass);
    return null;
  }

  @Delete(':id')
  removeUser(@Param('id') userId: string) {
    this.usersService.deleteUser(userId);
    return null;
  }
}
