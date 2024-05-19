import { ProductsService } from './products.service';
import { ProductEntity } from './product.entity';
import { ProductDto } from "./product.dto";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<ProductEntity[]>;
    findOne(id: string): Promise<ProductEntity>;
    create(productData: ProductDto): Promise<ProductEntity>;
    update(id: string, productData: ProductDto): Promise<ProductEntity>;
    remove(id: string): Promise<void>;
}
