import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { WishlistsService } from './wishlists.service';
import { WishlistEntity } from './wishlist.entity';
import { WishlistDto } from './wishlist.dto';

@Controller('wishlists')
export class WishlistsController {
    constructor(private readonly wishlistsService: WishlistsService) {}

    @Get()
    async findAll(): Promise<WishlistEntity[]> {
        return this.wishlistsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<WishlistEntity> {
        return this.wishlistsService.findOne(+id);
    }

    @Post()
    async create(@Body() wishlistData: WishlistDto): Promise<WishlistEntity> {
        return this.wishlistsService.create(wishlistData);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.wishlistsService.remove(+id);
    }
}
