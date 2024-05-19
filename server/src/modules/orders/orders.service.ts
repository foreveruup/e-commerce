import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from './order.entity';
import { OrderDto } from './order.dto';
import { OrderProductEntity } from '../orderProducts/orderProduct.entity';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(OrderEntity)
        private readonly orderRepository: Repository<OrderEntity>,
        @InjectRepository(OrderProductEntity)
        private readonly orderProductRepository: Repository<OrderProductEntity>,
    ) {}

    async findAll(): Promise<OrderEntity[]> {
        return await this.orderRepository.find({ relations: ['orderProducts'] });
    }

    async findOne(id: number): Promise<OrderEntity> {
        return await this.orderRepository.findOne({ where: { id }, relations: ['orderProducts']});
    }

    async create(orderData: OrderDto): Promise<OrderEntity> {
        const orderEntity = new OrderEntity();
        orderEntity.customerName = orderData.customerName;
        orderEntity.totalPrice = orderData.totalPrice;
        orderEntity.created_at = Date.now();

        orderEntity.orderProducts = orderData.orderProducts.map(orderProductDto => {
            const orderProductEntity = new OrderProductEntity();
            orderProductEntity.product = orderProductDto.product;
            orderProductEntity.quantity = orderProductDto.quantity;
            return orderProductEntity;
        });
        return await this.orderRepository.save(orderEntity);
    }

    async update(id: number, orderData: OrderDto): Promise<OrderEntity> {
        const orderToUpdate = await this.orderRepository.findOne({ where: { id }});
        if (!orderToUpdate) {
            throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
        }

        orderToUpdate.customerName = orderData.customerName;
        orderToUpdate.totalPrice = orderData.totalPrice;

        await this.orderRepository.save(orderToUpdate);

        return orderToUpdate;
    }

    async remove(id: number): Promise<void> {
        const orderToRemove = await this.orderRepository.findOne({ where: { id }});
        if (!orderToRemove) {
            throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
        }
        await this.orderRepository.remove(orderToRemove);
    }
}
