import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "5432542314321",
            name: "Item One",
            quantity: 100,
        },
        {
            id: "76534653543543",
            name: "Item Two",
            quantity: 200,
        },
        {
            id: "87987656876",
            name: "Item Three",
            quantity: 300,
        },
    ];
}
