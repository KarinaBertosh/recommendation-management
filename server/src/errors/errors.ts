import { HttpException } from "@nestjs/common";

export class UserAlreadyExists extends HttpException {
    constructor() {
        super(`User already exists`, 400);
    }
}

export class UserNotExist extends HttpException {
    constructor() {
        super(`User not exists`, 404);
    }
}

export class PasswordNotCorrect extends HttpException {
    constructor() {
        super('Password or login not correct', 403);
    }
}