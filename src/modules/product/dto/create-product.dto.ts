import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    type: Number,
  })
  @IsInt()
  @IsNotEmpty()
  detailId: number;

  @ApiProperty({
    type: Number,
  })
  @IsInt()
  @IsNotEmpty()
  brendId: number;
}
