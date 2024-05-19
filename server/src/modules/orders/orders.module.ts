import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OrderEntity } from './order.entity';
import { OrderProductEntity } from '../orderProducts/orderProduct.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([OrderEntity, OrderProductEntity]),
    ],
    controllers: [OrdersController],
    providers: [OrdersService],
})
export class OrdersModule {}
