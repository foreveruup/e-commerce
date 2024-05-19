import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../users/user.entity';

@Module({
    imports: [UsersModule, TypeOrmModule.forFeature([UserEntity])],
    controllers: [RegisterController],
    providers: [UsersService],
})
export class RegisterModule {}
