import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderEntity } from './order.entity';
import { OrderDto } from './order.dto';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Get()
    async findAll(): Promise<OrderEntity[]> {
        return this.ordersService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<OrderEntity> {
        return this.ordersService.findOne(+id);
    }

    @Post()
    async create(@Body() orderData: OrderDto): Promise<OrderEntity> {
        return this.ordersService.create(orderData);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() orderData: OrderDto): Promise<OrderEntity> {
        return this.ordersService.update(+id, orderData);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.ordersService.remove(+id);
    }
}
