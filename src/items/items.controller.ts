import {Body, Controller, Get, Post} from "@nestjs/common"
import {ItemsService} from "./items.service"
import {CreateItemDto} from "./dto/create-item.dto";
import {GetItemDto} from "./dto/get-item.dto";

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

@Post('/create')
create(@Body() createItemDto: CreateItemDto) {
        return this.itemsService.create(createItemDto)
}

    @Get()
    getAll() {
        return this.itemsService.getAll()
    }

    @Post()
    getOne(@Body() getItemDto: GetItemDto){
        return this.itemsService.getOne(getItemDto)
    }

    @Post('/remove')
    removeOne(@Body() getItemDto: GetItemDto){
        return this.itemsService.removeOne(getItemDto)
    }
}