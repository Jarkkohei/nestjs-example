import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface'; 

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    findAll(): string {
        return 'Get all items';
    }

    @Get(':id')
    findOne(@Param('id') id): string {
        return `Item ${id}`;
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name} Description: ${createItemDto.description} Quantity: ${createItemDto.quantity}`; 
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Delete id ${id}`;
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
        return `Update id ${id} - Name: ${updateItemDto.name}`;
    }
}
