import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { create } from 'domain';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'Get all items';
    }

    @Get()
    create(): string {
        return 'Create item';
    }
}
