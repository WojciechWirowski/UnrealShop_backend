import {Module} from "@nestjs/common"
import {Item} from "./item.entity"
import {ItemsController} from "./items.controller"
import {ItemsService} from "./items.service"
import {TypeOrmModule} from "@nestjs/typeorm"

@Module({
    imports: [TypeOrmModule.forFeature([Item])],
    controllers: [ItemsController],
    providers: [ItemsService]
})
export class ItemsModule {}