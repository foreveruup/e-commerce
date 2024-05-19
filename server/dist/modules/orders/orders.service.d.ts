import { Repository } from 'typeorm';
import { OrderEntity } from './order.entity';
import { OrderDto } from './order.dto';
import { OrderProductEntity } from '../orderProducts/orderProduct.entity';
export declare class OrdersService {
    private readonly orderRepository;
    private readonly orderProductRepository;
    constructor(orderRepository: Repository<OrderEntity>, orderProductRepository: Repository<OrderProductEntity>);
    findAll(): Promise<OrderEntity[]>;
    findOne(id: number): Promise<OrderEntity>;
    create(orderData: OrderDto): Promise<OrderEntity>;
    update(id: number, orderData: OrderDto): Promise<OrderEntity>;
    remove(id: number): Promise<void>;
}
