import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OrderProductService } from './orderProduct.service';
import { OrderProductEntity } from './orderProduct.entity';
import { OrderProductDto } from './orderProduct.dto';

@Controller('orderProduct')
export class OrderProductsController {
    constructor(private readonly orderProductsService: OrderProductService) {}

    @Post()
    async create(@Body() orderProductDto: OrderProductDto): Promise<OrderProductEntity> {
        return this.orderProductsService.create(orderProductDto);
    }

    @Get()
    async findAll(): Promise<OrderProductEntity[]> {
        return this.orderProductsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<OrderProductEntity> {
        return this.orderProductsService.findOne(+id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() orderProductDto: OrderProductDto): Promise<OrderProductEntity> {
        return this.orderProductsService.update(+id, orderProductDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.orderProductsService.remove(+id);
    }
}
