import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/user.dto';
export declare class RegisterController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(createUserDto: CreateUserDto): Promise<import("../users/user.entity").UserEntity>;
}
