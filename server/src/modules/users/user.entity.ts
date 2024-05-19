import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { WishlistEntity } from '../wishlists/wishlist.entity';

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @OneToMany(() => WishlistEntity, wishlist => wishlist.user)
    wishlists: WishlistEntity[];
}
