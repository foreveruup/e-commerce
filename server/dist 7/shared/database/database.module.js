"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const product_entity_1 = require("../../modules/products/product.entity");
const user_entity_1 = require("../../modules/users/user.entity");
const order_entity_1 = require("../../modules/orders/order.entity");
const database_providers_1 = require("./database.providers");
const orderProduct_entity_1 = require("../../modules/orderProducts/orderProduct.entity");
const wishlist_entity_1 = require("../../modules/wishlists/wishlist.entity");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => __awaiter(void 0, void 0, void 0, function* () {
                    return ({
                        type: 'postgres',
                        host: 'localhost',
                        port: 5432,
                        username: 'amir',
                        password: configService.get('DB_PASSWORD'),
                        database: 'my_shop_database',
                        entities: [product_entity_1.ProductEntity, user_entity_1.UserEntity, order_entity_1.OrderEntity, orderProduct_entity_1.OrderProductEntity, wishlist_entity_1.WishlistEntity],
                        synchronize: true,
                    });
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [...database_providers_1.databaseProviders],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map