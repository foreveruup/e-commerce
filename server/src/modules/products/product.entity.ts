import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { OrderProductEntity } from '../orderProducts/orderProduct.entity';

@Entity()
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brandName: string;


    @Column()
    description: string;

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @Column('simple-array', { default: [] })
    availableSizes: string[];

    @OneToMany(() => OrderProductEntity, orderProduct => orderProduct.product)
    orderProducts: OrderProductEntity[];
}
