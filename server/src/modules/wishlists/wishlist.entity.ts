import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { UserEntity } from '../users/user.entity';
import { ProductEntity } from '../products/product.entity';

@Entity('wishlists')
export class WishlistEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => UserEntity, user => user.wishlists)
    user: UserEntity;

    @ManyToMany(() => ProductEntity)
    @JoinTable()
    products: ProductEntity[];
}
