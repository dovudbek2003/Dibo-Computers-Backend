import { PartialType } from '@nestjs/mapped-types';
import { CreateBrendDto } from './create-brend.dto';

export class UpdateBrendDto extends PartialType(CreateBrendDto) {}
