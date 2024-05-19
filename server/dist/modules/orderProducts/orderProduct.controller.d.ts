import { OrderProductService } from './orderProduct.service';
import { OrderProductEntity } from './orderProduct.entity';
import { OrderProductDto } from './orderProduct.dto';
export declare class OrderProductsController {
    private readonly orderProductsService;
    constructor(orderProductsService: OrderProductService);
    create(orderProductDto: OrderProductDto): Promise<OrderProductEntity>;
    findAll(): Promise<OrderProductEntity[]>;
    findOne(id: string): Promise<OrderProductEntity>;
    update(id: string, orderProductDto: OrderProductDto): Promise<OrderProductEntity>;
    remove(id: string): Promise<void>;
}
