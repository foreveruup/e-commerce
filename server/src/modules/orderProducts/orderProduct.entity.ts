import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { OrderEntity } from '../orders/order.entity';
import { ProductEntity } from '../products/product.entity';

@Entity()
export class OrderProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => OrderEntity, order => order.orderProducts)
    order: OrderEntity;

    @ManyToOne(() => ProductEntity, product => product.orderProducts)
    product: number;

    @Column( 'bigint' )
    quantity: number;
}
