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
exports.WishlistsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const wishlist_entity_1 = require("./wishlist.entity");
const product_entity_1 = require("../products/product.entity");
let WishlistsService = class WishlistsService {
    constructor(wishlistRepository, productRepository) {
        this.wishlistRepository = wishlistRepository;
        this.productRepository = productRepository;
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.wishlistRepository.find({ relations: ['products', 'user'] });
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.wishlistRepository.findOne({ where: { id }, relations: ['products', 'user'] });
        });
    }
    create(wishlistData) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.productRepository.find({
                where: wishlistData.products.map(id => ({ id })),
            });
            if (products.length !== wishlistData.products.length) {
                throw new common_1.HttpException('Some products not found', common_1.HttpStatus.NOT_FOUND);
            }
            const wishlist = this.wishlistRepository.create(Object.assign(Object.assign({}, wishlistData), { products: products }));
            return this.wishlistRepository.save(wishlist);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const wishlistToRemove = yield this.wishlistRepository.findOne({ where: { id } });
            if (!wishlistToRemove) {
                throw new common_1.HttpException('Wishlist not found', common_1.HttpStatus.NOT_FOUND);
            }
            yield this.wishlistRepository.remove(wishlistToRemove);
        });
    }
};
exports.WishlistsService = WishlistsService;
exports.WishlistsService = WishlistsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wishlist_entity_1.WishlistEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(product_entity_1.ProductEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], WishlistsService);
//# sourceMappingURL=wishlists.service.js.map