import { PartialType } from '@nestjs/mapped-types';
import { CreateProductTegDto } from './create-product-teg.dto';

export class UpdateProductTegDto extends PartialType(CreateProductTegDto) {}
