import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Product } from 'src/modules/product/entities/product.entity';

export class CreateFileUploadDto {
  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  url: string;

  @ApiProperty({
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  mimetype: string;

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  size: number;

  @ApiProperty({
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  product: number;
}
