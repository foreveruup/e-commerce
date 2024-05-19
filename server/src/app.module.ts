import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import { ProductsModule } from './modules/products/products.module';
import { UsersModule } from './modules/users/users.module';
import { OrdersModule } from './modules/orders/orders.module';
import { RegisterModule } from './modules/register/register.module';
import { OrderProductsModule } from './modules/orderProducts/orderProduct.module';
import { DatabaseModule } from './shared/database/database.module';
import { ErrorFilter } from './error.filter';
import { APP_FILTER } from '@nestjs/core';
import {AuthModule} from "./shared/auth/auth.module"
import {WishlistsModule} from "./modules/wishlists/wishlists.module";

@Module({
    imports: [
        ConfigModule.forRoot(),
        DatabaseModule,
        ProductsModule,
        UsersModule,
        OrdersModule,
        OrderProductsModule,
        AuthModule,
        WishlistsModule,
        RegisterModule,
    ],
    providers: [
        {
            provide: APP_FILTER,
            useClass: ErrorFilter,
        },
    ],
})
export class AppModule {}
