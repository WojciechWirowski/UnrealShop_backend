import {InjectRepository} from "@nestjs/typeorm";
import {Question} from "./question.entity";
import {Repository} from "typeorm";
import {QuestionDto} from "./dto/questionDto.dto";
import {GetItemDto} from "../items/dto/get-item.dto";

export class QuestionService {
    constructor(
        @InjectRepository(Question)
        private questionRepository: Repository<Question>) {}

    async create(questionDto: QuestionDto){
        try{
            return this.questionRepository.save(questionDto)
        }catch (error) {
            console.log(error.code)
        }
    }

    async getAll(): Promise<Question[]>{
        return await this.questionRepository.find()
    }

    async update(questionDto: QuestionDto){
        return await this.questionRepository.update(questionDto.id, questionDto)
    }

    async remove(questionDto: QuestionDto){
            try{
                return this.questionRepository.findOne({
                    where:{
                        id: questionDto.id
                    }
                }).then((x)=>this.questionRepository.remove(x))
            }catch(error){
                return console.log(error.code)
            }
    }
}