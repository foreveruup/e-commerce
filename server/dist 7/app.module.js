"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const products_module_1 = require("./modules/products/products.module");
const users_module_1 = require("./modules/users/users.module");
const orders_module_1 = require("./modules/orders/orders.module");
const register_module_1 = require("./modules/register/register.module");
const orderProduct_module_1 = require("./modules/orderProducts/orderProduct.module");
const database_module_1 = require("./shared/database/database.module");
const error_filter_1 = require("./error.filter");
const core_1 = require("@nestjs/core");
const auth_module_1 = require("./shared/auth/auth.module");
const wishlists_module_1 = require("./modules/wishlists/wishlists.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            database_module_1.DatabaseModule,
            products_module_1.ProductsModule,
            users_module_1.UsersModule,
            orders_module_1.OrdersModule,
            orderProduct_module_1.OrderProductsModule,
            auth_module_1.AuthModule,
            wishlists_module_1.WishlistsModule,
            register_module_1.RegisterModule,
        ],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: error_filter_1.ErrorFilter,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map