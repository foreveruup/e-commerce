import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderProductEntity } from './orderProduct.entity';
import { OrderProductDto } from './orderProduct.dto';

@Injectable()
export class OrderProductService {
    constructor(
        @InjectRepository(OrderProductEntity)
        private readonly orderProductRepository: Repository<OrderProductEntity>,
    ) {}

    async create(orderProductDto: OrderProductDto): Promise<OrderProductEntity> {
        const orderProduct = new OrderProductEntity();
        orderProduct.product = orderProductDto.product;
        orderProduct.quantity = orderProductDto.quantity;
        return this.orderProductRepository.save(orderProduct);
    }

    async findAll(): Promise<OrderProductEntity[]> {
        return this.orderProductRepository.find();
    }

    async findOne(id: number): Promise<OrderProductEntity> {
        return this.orderProductRepository.findOne({ where: { id } });
    }

    async update(id: number, orderProductDto: OrderProductDto): Promise<OrderProductEntity> {
        const orderProduct = await this.orderProductRepository.findOne({ where: { id } });
        if (!orderProduct) {
            throw new Error('Order product not found');
        }
        orderProduct.product = orderProductDto.product;
        orderProduct.quantity = orderProductDto.quantity;
        return this.orderProductRepository.save(orderProduct);
    }

    async remove(id: number): Promise<void> {
        await this.orderProductRepository.delete(id);
    }
}
