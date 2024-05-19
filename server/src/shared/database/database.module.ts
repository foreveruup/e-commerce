import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductEntity } from '../../modules/products/product.entity';
import { UserEntity } from '../../modules/users/user.entity';
import { OrderEntity } from '../../modules/orders/order.entity';
import { databaseProviders } from './database.providers';
import {OrderProductEntity} from "../../modules/orderProducts/orderProduct.entity";
import {WishlistEntity} from "../../modules/wishlists/wishlist.entity";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'amir',
                password: configService.get<string>('DB_PASSWORD'),
                database: 'my_shop_database',
                entities: [ProductEntity, UserEntity, OrderEntity, OrderProductEntity, WishlistEntity],
                synchronize: true,
            }),
            inject: [ConfigService],
        }),
    ],
    providers: [...databaseProviders],
})
export class DatabaseModule {}
