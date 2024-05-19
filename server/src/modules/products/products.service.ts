import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>,
    ) {
    }

    async findAll(): Promise<ProductEntity[]> {
        return this.productRepository.find();
    }

    async findOne(id: number): Promise<ProductEntity> {
        return this.productRepository.findOne({where: {id}});
    }

    async create(productData: ProductDto): Promise<ProductEntity> {
        if (!productData.availableSizes) {
            productData.availableSizes = [];
        }
        return this.productRepository.save(productData);
    }
    async update(id: number, productData: ProductDto): Promise<ProductEntity> {
        const productToUpdate = await this.productRepository.findOne({where: {id}});
        if (!productToUpdate) {
            throw new Error('Product not found');
        }

        productToUpdate.name = productData.name;
        productToUpdate.description = productData.description;
        productToUpdate.price = productData.price;

        return this.productRepository.save(productToUpdate);
    }

    async remove(id: number): Promise<void> {
        await this.productRepository.delete(id);
    }
}
