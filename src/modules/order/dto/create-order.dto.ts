import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, ValidateNested } from 'class-validator';

class PrdouctDto {
  @ApiProperty({
    type: Number,
    example: 2,
  })
  @IsInt()
  productId: number;

  @ApiProperty({
    type: Number,
    example: 10,
  })
  @IsInt()
  productCount: number;

  @ApiProperty({
    type: Number,
    example: 1000,
  })
  @IsInt()
  totalSum: number;
}
export class CreateOrderDto {
  @ApiProperty({ type: [PrdouctDto] })
  @ValidateNested({ each: true })
  @Type(() => PrdouctDto)
  products: PrdouctDto[];

  @ApiProperty({ type: Number })
  @IsInt()
  totalSum: number;
}
