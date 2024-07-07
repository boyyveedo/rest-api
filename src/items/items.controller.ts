import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemServices: ItemsService) {

    }
    @Get()
    findAll(): Promise<Item[]> {
        return this.itemServices.findAll()
    }



    @Post()
    createItems(@Body() CreateItemDto: CreateItemDto): Promise<Item> {
        return this.itemServices.Create(CreateItemDto)
    }

    @Delete(':id')
    deleteItem(@Param('id') id): Promise<Item> {
        return this.itemServices.Delete(id);
    }


    @Put(':id')
    updateItem(@Body() UpdateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
        return this.itemServices.Update(id, UpdateItemDto)
    }


}
