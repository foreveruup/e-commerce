"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderProductsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const orderProduct_controller_1 = require("../orderProducts/orderProduct.controller");
const orderProduct_service_1 = require("./orderProduct.service");
const orderProduct_entity_1 = require("./orderProduct.entity");
let OrderProductsModule = class OrderProductsModule {
};
exports.OrderProductsModule = OrderProductsModule;
exports.OrderProductsModule = OrderProductsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([orderProduct_entity_1.OrderProductEntity]),
        ],
        controllers: [orderProduct_controller_1.OrderProductsController],
        providers: [orderProduct_service_1.OrderProductService],
        exports: [typeorm_1.TypeOrmModule],
    })
], OrderProductsModule);
//# sourceMappingURL=orderProduct.module.js.map