import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductTagDto {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNumber()
  @IsNotEmpty()
  tagId: number;
}
