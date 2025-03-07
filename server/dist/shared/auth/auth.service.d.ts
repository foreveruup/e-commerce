import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../modules/users/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    generateToken(user: any): Promise<{
        access_token: string;
    }>;
}
