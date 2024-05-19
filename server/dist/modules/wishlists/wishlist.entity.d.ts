import { UserEntity } from '../users/user.entity';
import { ProductEntity } from '../products/product.entity';
export declare class WishlistEntity {
    id: number;
    name: string;
    user: UserEntity;
    products: ProductEntity[];
}
