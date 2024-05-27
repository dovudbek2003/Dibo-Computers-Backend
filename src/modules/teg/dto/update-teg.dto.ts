import { PartialType } from '@nestjs/mapped-types';
import { CreateTegDto } from './create-teg.dto';

export class UpdateTegDto extends PartialType(CreateTegDto) {}
