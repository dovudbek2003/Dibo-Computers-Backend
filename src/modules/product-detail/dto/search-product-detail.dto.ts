import { IsOptional, IsString } from 'class-validator';

export class FindSpecificDto {
  @IsOptional()
  @IsString()
  name?: string;
}
