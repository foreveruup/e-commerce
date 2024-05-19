import { OrderEntity } from '../orders/order.entity';
export declare class OrderProductEntity {
    id: number;
    order: OrderEntity;
    product: number;
    quantity: number;
}
