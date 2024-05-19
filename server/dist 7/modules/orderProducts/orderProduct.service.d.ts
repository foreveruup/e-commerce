import { Repository } from 'typeorm';
import { OrderProductEntity } from './orderProduct.entity';
import { OrderProductDto } from './orderProduct.dto';
export declare class OrderProductService {
    private readonly orderProductRepository;
    constructor(orderProductRepository: Repository<OrderProductEntity>);
    create(orderProductDto: OrderProductDto): Promise<OrderProductEntity>;
    findAll(): Promise<OrderProductEntity[]>;
    findOne(id: number): Promise<OrderProductEntity>;
    update(id: number, orderProductDto: OrderProductDto): Promise<OrderProductEntity>;
    remove(id: number): Promise<void>;
}
