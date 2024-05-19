import { Repository } from 'typeorm';
import { WishlistEntity } from './wishlist.entity';
import { WishlistDto } from './wishlist.dto';
import { ProductEntity } from '../products/product.entity';
export declare class WishlistsService {
    private readonly wishlistRepository;
    private readonly productRepository;
    constructor(wishlistRepository: Repository<WishlistEntity>, productRepository: Repository<ProductEntity>);
    findAll(): Promise<WishlistEntity[]>;
    findOne(id: number): Promise<WishlistEntity>;
    create(wishlistData: WishlistDto): Promise<WishlistEntity>;
    remove(id: number): Promise<void>;
}
