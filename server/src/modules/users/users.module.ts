import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserEntity } from './user.entity';
import { WishlistEntity } from '../wishlists/wishlist.entity';
import { WishlistsService } from '../wishlists/wishlists.service';
import { ProductsModule } from '../products/products.module';
import { WishlistsModule } from '../wishlists/wishlists.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity, WishlistEntity]),
        ProductsModule,
        WishlistsModule,
    ],
    controllers: [UsersController],
    providers: [UsersService, WishlistsService],
    exports: [UsersService],
})
export class UsersModule {}
