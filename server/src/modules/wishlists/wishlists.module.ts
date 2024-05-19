import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WishlistEntity } from './wishlist.entity';
import { WishlistsService } from './wishlists.service';
import { ProductsModule } from '../products/products.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([WishlistEntity]),
        ProductsModule,
    ],
    providers: [WishlistsService],
    exports: [WishlistsService],
})
export class WishlistsModule {}
