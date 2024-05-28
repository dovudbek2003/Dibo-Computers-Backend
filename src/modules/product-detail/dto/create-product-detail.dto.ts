import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDetailDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  model: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  processor: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  color: string;

  @ApiProperty({
    type: Number,
  })
  @IsInt()
  weight: number;

  @ApiProperty({
    type: Number,
  })
  @IsInt()
  count: number;

  @ApiProperty({
    type: Number,
  })
  @IsInt()
  price: number;
}
