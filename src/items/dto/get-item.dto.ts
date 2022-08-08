import { ApiProperty } from '@nestjs/swagger';

export class GetItemDto {

    @ApiProperty()
    id: number
}