import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
    ) {}

    async create(createUserDto: CreateUserDto): Promise<UserEntity> {
        const hashedPassword = await hash(createUserDto.password, 10);
        const user = this.usersRepository.create({
            ...createUserDto,
            password: hashedPassword,
        });
        await this.usersRepository.save(user);
        return user;
    }


    async findAll(): Promise<UserEntity[]> {
        return this.usersRepository.find();
    }

    async findOne(id: string): Promise<UserEntity> {
        const user = await this.usersRepository.findOne({ where: { id: +id } });
        if (!user) {
            throw new NotFoundException(`User #${id} not found`);
        }
        return user;
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
        const user = await this.usersRepository.preload({
            id: +id,
            ...updateUserDto,
        });
        if (!user) {
            throw new NotFoundException(`User #${id} not found`);
        }
        await this.usersRepository.save(user);
        return user;
    }

    async remove(id: string): Promise<void> {
        const user = await this.findOne(id);
        await this.usersRepository.remove(user);
    }

    async findOneByEmail(email: string): Promise<UserEntity | undefined> {
        return this.usersRepository.findOne({ where: { email } });
    }

}
