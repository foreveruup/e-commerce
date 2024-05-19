import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./user.entity").UserEntity>;
    findAll(): Promise<import("./user.entity").UserEntity[]>;
    findOne(id: string): Promise<import("./user.entity").UserEntity>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./user.entity").UserEntity>;
    remove(id: string): Promise<void>;
    getProfile(req: any): Promise<import("./user.entity").UserEntity>;
}
