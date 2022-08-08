import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {

    @ApiProperty()
    name: string

    @ApiProperty()
    photoPath: string

    @ApiProperty()
    price: number
}