import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from '@nestjs/class-validator';
import { RolesEnum } from '../entities/roles.enum';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsEnum({ type: RolesEnum })
  @IsOptional()
  role?: RolesEnum = RolesEnum.guest;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
}
