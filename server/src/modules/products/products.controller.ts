import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductEntity } from './product.entity';
import { ProductDto } from "./product.dto";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    async findAll(): Promise<ProductEntity[]> {
        return this.productsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<ProductEntity> {
        return this.productsService.findOne(+id);
    }

    @Post()
    async create(@Body() productData: ProductDto): Promise<ProductEntity> {
        return this.productsService.create(productData);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() productData: ProductDto): Promise<ProductEntity> {
        return this.productsService.update(+id, productData);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.productsService.remove(+id);
    }
}

