import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';
import { ProductDto } from './product.dto';
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: Repository<ProductEntity>);
    findAll(): Promise<ProductEntity[]>;
    findOne(id: number): Promise<ProductEntity>;
    create(productData: ProductDto): Promise<ProductEntity>;
    update(id: number, productData: ProductDto): Promise<ProductEntity>;
    remove(id: number): Promise<void>;
}
