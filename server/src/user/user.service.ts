import { Injectable, NotFoundException } from '@nestjs/common';

import { User } from './user.model';

@Injectable()
export class UsersService {
  private users: User[] = [];

  insertUser(email: string, password: string) {
    const userId = crypto.randomUUID();
    const newUser = new User(email, password);
    this.users.push(newUser);
    return userId;
  }

  getUsers() {
    return [...this.users];
  }

  getSingleUser(userId: string) {
    const user = this.findUser(userId)[0];
    return { ...user };
  }

  updateUser(userId: string, email:string, password: string) {
    const [user, userIndex] = this.findUser(userId);
    const updatedUser = { ...user };
    if (email && password) {
      updatedUser.password = password;
    }
    this.users[userIndex] = updatedUser;
  }

  deleteUser(userId: string) {
      const index = this.findUser(userId)[1];
      this.users.splice(index, 1);
  }

  private findUser(id: string): [User, number] {
    const userIndex = this.users.findIndex(user => user.id === id);
    const user = this.users[userIndex];
    if (!user) {
      throw new NotFoundException('Could not find user.');
    }
    return [user, userIndex];
  }
}
