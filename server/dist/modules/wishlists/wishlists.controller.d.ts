import { WishlistsService } from './wishlists.service';
import { WishlistEntity } from './wishlist.entity';
import { WishlistDto } from './wishlist.dto';
export declare class WishlistsController {
    private readonly wishlistsService;
    constructor(wishlistsService: WishlistsService);
    findAll(): Promise<WishlistEntity[]>;
    findOne(id: string): Promise<WishlistEntity>;
    create(wishlistData: WishlistDto): Promise<WishlistEntity>;
    remove(id: string): Promise<void>;
}
