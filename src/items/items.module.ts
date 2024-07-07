// items.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { ItemSchema } from './schemas/item.schema';
@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }]),
    ],
    providers: [ItemsService],
    controllers: [ItemsController],
    exports: [ItemsService],
})
export class ItemsModule { }
