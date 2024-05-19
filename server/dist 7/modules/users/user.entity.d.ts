import { WishlistEntity } from '../wishlists/wishlist.entity';
export declare class UserEntity {
    id: number;
    name: string;
    lastname: string;
    email: string;
    password: string;
    wishlists: WishlistEntity[];
}
