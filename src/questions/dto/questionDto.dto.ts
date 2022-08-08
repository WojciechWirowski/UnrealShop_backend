import { ApiProperty } from '@nestjs/swagger';

export class QuestionDto {

    @ApiProperty()
    id: number

    @ApiProperty()
    name: string

    @ApiProperty()
    message: string

    @ApiProperty()
    answer: string
}