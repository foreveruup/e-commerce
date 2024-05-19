"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.OrderProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const orderProduct_entity_1 = require("./orderProduct.entity");
let OrderProductService = class OrderProductService {
    constructor(orderProductRepository) {
        this.orderProductRepository = orderProductRepository;
    }
    create(orderProductDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const orderProduct = new orderProduct_entity_1.OrderProductEntity();
            orderProduct.product = orderProductDto.product;
            orderProduct.quantity = orderProductDto.quantity;
            return this.orderProductRepository.save(orderProduct);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.orderProductRepository.find();
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.orderProductRepository.findOne({ where: { id } });
        });
    }
    update(id, orderProductDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const orderProduct = yield this.orderProductRepository.findOne({ where: { id } });
            if (!orderProduct) {
                throw new Error('Order product not found');
            }
            orderProduct.product = orderProductDto.product;
            orderProduct.quantity = orderProductDto.quantity;
            return this.orderProductRepository.save(orderProduct);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.orderProductRepository.delete(id);
        });
    }
};
exports.OrderProductService = OrderProductService;
exports.OrderProductService = OrderProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(orderProduct_entity_1.OrderProductEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrderProductService);
//# sourceMappingURL=orderProduct.service.js.map