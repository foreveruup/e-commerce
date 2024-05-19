import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { OrderProductEntity } from '../orderProducts/orderProduct.entity';

@Entity()
export class OrderEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customerName: string;

    @Column()
    totalPrice: number;

    @Column({ type: 'bigint' })
    created_at: number;

    @OneToMany(() => OrderProductEntity, orderProduct => orderProduct.order)
    orderProducts: OrderProductEntity[];
}