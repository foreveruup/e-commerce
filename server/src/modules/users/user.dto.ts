    export class CreateUserDto {
        readonly username: string;
        readonly name: string;
        readonly lastname: string;
        readonly email: string;
        readonly password: string;
    }

    export class UpdateUserDto {
        readonly username?: string;
        readonly name?: string;
        readonly lastname?: string;
        readonly email?: string;
        readonly password?: string;
    }