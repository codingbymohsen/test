import { RolesEnum } from './roles.enum';

export class UserEntity {
  firstName: string;
  lastName: string;
  role?: RolesEnum = RolesEnum.guest;
  email: string;
}
