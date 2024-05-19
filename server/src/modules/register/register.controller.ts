import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/user.dto';

@Controller('register')
export class RegisterController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async register(@Body() createUserDto: CreateUserDto) {
        const user = await this.usersService.create(createUserDto);
        if (!user) {
            throw new HttpException('Registration failed', HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return user;
    }
}