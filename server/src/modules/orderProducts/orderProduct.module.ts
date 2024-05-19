import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderProductsController } from '../orderProducts/orderProduct.controller';
import { OrderProductService } from './orderProduct.service';
import { OrderProductEntity } from './orderProduct.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([OrderProductEntity]),
    ],
    controllers: [OrderProductsController],
    providers: [OrderProductService],
    exports: [TypeOrmModule],
})
export class OrderProductsModule {}
