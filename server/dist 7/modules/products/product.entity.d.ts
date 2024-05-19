import { OrderProductEntity } from '../orderProducts/orderProduct.entity';
export declare class ProductEntity {
    id: number;
    name: string;
    brandName: string;
    description: string;
    price: number;
    availableSizes: string[];
    orderProducts: OrderProductEntity[];
}
