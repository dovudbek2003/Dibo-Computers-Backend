import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  Matches,
  NotEquals,
} from 'class-validator';
import { IsUzbekPhoneNumber } from 'src/common/decorator/uzbek-phone-number.decorator';
import { Role } from 'src/common/enums/role.enum';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  })
  @IsNotEmpty()
  @Matches(/^[a-zA-Z']+$/, { message: 'First Name can only contain letters' })
  @Length(3, 20, {
    message: 'First Name must be between 3 and 20 characters long',
  })
  firstName: string;

  @ApiProperty({
    type: String,
    required: false,
    minLength: 3,
    maxLength: 20,
  })
  @IsOptional()
  @Matches(/^[a-zA-Z']+$/, { message: 'Last Name can only contain letters' })
  @Length(3, 20, {
    message: 'Last Name must be between 3 and 20 characters long',
  })
  lastName: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsUzbekPhoneNumber({
    message:
      'Invalid phone number format. It should start with +998 followed by 9 digits.',
  })
  phone: string;

  @ApiProperty({
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
  })
  @IsNotEmpty()
  @IsString()
  @Length(3, 15, { message: 'Login must be between 4 and 20 characters long' })
  login: string;

  @ApiProperty({
    type: String,
    required: true,
    minLength: 4,
    maxLength: 8,
  })
  @IsNotEmpty()
  @IsString()
  @Length(4, 8, { message: 'Password must be between 4 and 8 characters long' })
  password: string;

  @IsOptional()
  @IsEnum(Role)
  @NotEquals(Role.ADMIN)
  role: Role;
}

export class CreateAdminDto {
  @ApiProperty({
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  })
  @IsNotEmpty()
  @Matches(/^[a-zA-Z']+$/, { message: 'First Name can only contain letters' })
  @Length(3, 20, {
    message: 'First Name must be between 3 and 20 characters long',
  })
  firstName: string;

  @ApiProperty({
    type: String,
    required: false,
    minLength: 3,
    maxLength: 20,
  })
  @IsOptional()
  @Matches(/^[a-zA-Z']+$/, { message: 'Last Name can only contain letters' })
  @Length(3, 20, {
    message: 'Last Name must be between 3 and 20 characters long',
  })
  lastName: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @IsNotEmpty()
  @IsUzbekPhoneNumber({
    message:
      'Invalid phone number format. It should start with +998 followed by 9 digits.',
  })
  phone: string;

  @ApiProperty({
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
  })
  @IsNotEmpty()
  @IsString()
  @Length(3, 15, { message: 'Login must be between 4 and 20 characters long' })
  login: string;

  @ApiProperty({
    type: String,
    required: true,
    minLength: 4,
    maxLength: 8,
  })
  @IsNotEmpty()
  @IsString()
  @Length(4, 8, { message: 'Password must be between 4 and 8 characters long' })
  password: string;

  @ApiProperty({ type: String, enum: Role, default: Role.ADMIN })
  @IsEnum(Role)
  role: Role;
}
