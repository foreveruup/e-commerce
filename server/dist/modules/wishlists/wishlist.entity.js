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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistEntity = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
const product_entity_1 = require("../products/product.entity");
let WishlistEntity = class WishlistEntity {
};
exports.WishlistEntity = WishlistEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], WishlistEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], WishlistEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, user => user.wishlists),
    __metadata("design:type", user_entity_1.UserEntity)
], WishlistEntity.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => product_entity_1.ProductEntity),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], WishlistEntity.prototype, "products", void 0);
exports.WishlistEntity = WishlistEntity = __decorate([
    (0, typeorm_1.Entity)('wishlists')
], WishlistEntity);
//# sourceMappingURL=wishlist.entity.js.map