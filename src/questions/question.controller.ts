import {Body, Controller, Get, Post} from "@nestjs/common";
import {QuestionDto} from "./dto/questionDto.dto";
import {QuestionService} from "./question.service";

@Controller('questions')
export class QuestionController {
    constructor(private readonly questionService: QuestionService) {}

    @Post('/ask')
    create(@Body() questionDto: QuestionDto) {
        return this.questionService.create(questionDto)
    }

    @Post('/answer')
    answer(@Body() questionDto: QuestionDto){
        return this.questionService.update(questionDto)

    }

    @Get()
    getAll() {
        return this.questionService.getAll()
    }

    @Post('/remove')
    remove(@Body() questionDto: QuestionDto){
       return this.questionService.remove(questionDto)
    }
}