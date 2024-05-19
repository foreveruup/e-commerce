import { OrderProductEntity } from '../orderProducts/orderProduct.entity';
export declare class OrderEntity {
    id: number;
    customerName: string;
    totalPrice: number;
    created_at: number;
    orderProducts: OrderProductEntity[];
}
