import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from '@nestjs/class-validator';
import { RolesEnum } from '../entities/roles.enum';

export class FindUsersDto {
  limit?: number = 10;
  skip?: number = 0;
  role?: RolesEnum;
}
