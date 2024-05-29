import { PartialType } from '@nestjs/mapped-types';
import { CreateProductTegDto } from './create-product-tag.dto';

export class UpdateProductTegDto extends PartialType(CreateProductTegDto) {}
