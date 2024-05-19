import { OrderProductDto } from '../orderProducts/orderProduct.dto';

export class OrderDto {
    readonly customerName: string;
    readonly totalPrice: number;
    readonly created_at: number;
    readonly orderProducts: OrderProductDto[];
}