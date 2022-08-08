import {Injectable} from "@nestjs/common"
import { InjectRepository } from '@nestjs/typeorm'
import {Repository} from "typeorm"
import {Item} from "./item.entity";
import {CreateItemDto} from "./dto/create-item.dto";
import {GetItemDto} from "./dto/get-item.dto";

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Item)
        private itemsRepository: Repository<Item>){}

    async create(createItemDto: CreateItemDto): Promise<Item> {

        try{
            return this.itemsRepository.save(createItemDto)
        }
        catch (error) {
            console.log(error.code)
        }
    }

    async getAll(): Promise<Item[]> {
        return await this.itemsRepository.find()
    }

    getOne(getItemDto: GetItemDto) {
        try{
            return this.itemsRepository.findOne({
                where:{
                    id: getItemDto.id
                }
            })
        }catch(error){
            return console.log(error.code)
        }
    }

    removeOne(getItemDto: GetItemDto) {
        try{
            return this.itemsRepository.findOne({
                where:{
                    id: getItemDto.id
                }
            }).then((x)=>this.itemsRepository.remove(x))
        }catch(error){
            return console.log(error.code)
        }
    }
}