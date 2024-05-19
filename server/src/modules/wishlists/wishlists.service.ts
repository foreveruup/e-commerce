import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WishlistEntity } from './wishlist.entity';
import { WishlistDto } from './wishlist.dto';
import { ProductEntity } from '../products/product.entity';

@Injectable()
export class WishlistsService {
    constructor(
        @InjectRepository(WishlistEntity)
        private readonly wishlistRepository: Repository<WishlistEntity>,
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>,
    ) {}

    async findAll(): Promise<WishlistEntity[]> {
        return this.wishlistRepository.find({ relations: ['products', 'user'] });
    }

    async findOne(id: number): Promise<WishlistEntity> {
        return this.wishlistRepository.findOne({ where: { id }, relations: ['products', 'user'] });
    }

    async create(wishlistData: WishlistDto): Promise<WishlistEntity> {
        // Convert product IDs to product entities using the recommended find method
        const products = await this.productRepository.find({
            where: wishlistData.products.map(id => ({ id })),
        });

        if (products.length !== wishlistData.products.length) {
            throw new HttpException('Some products not found', HttpStatus.NOT_FOUND);
        }

        const wishlist = this.wishlistRepository.create({
            ...wishlistData,
            products: products,
        });

        return this.wishlistRepository.save(wishlist);
    }

    async remove(id: number): Promise<void> {
        const wishlistToRemove = await this.wishlistRepository.findOne({ where: { id } });
        if (!wishlistToRemove) {
            throw new HttpException('Wishlist not found', HttpStatus.NOT_FOUND);
        }
        await this.wishlistRepository.remove(wishlistToRemove);
    }
}
