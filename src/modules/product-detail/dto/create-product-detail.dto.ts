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
  ram: number;

  @ApiProperty({
    type: Number,
  })
  @IsInt()
  hdd: number;

  @ApiProperty({
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  displey: string;

  @ApiProperty({
    type: Number,
  })
  @IsInt()
  price: number;
}
