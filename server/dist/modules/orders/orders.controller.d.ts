import { OrdersService } from './orders.service';
import { OrderEntity } from './order.entity';
import { OrderDto } from './order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    findAll(): Promise<OrderEntity[]>;
    findOne(id: string): Promise<OrderEntity>;
    create(orderData: OrderDto): Promise<OrderEntity>;
    update(id: string, orderData: OrderDto): Promise<OrderEntity>;
    remove(id: string): Promise<void>;
}
