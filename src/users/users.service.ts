import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { PaginationParams } from './types/pagination-params.type';
import { FindUsersDto } from './dto/find-user.dto';
import { RolesEnum } from './entities/roles.enum';

@Injectable()
export class UsersService {
  users: UserEntity[] = [];
  async create(createUserDto: CreateUserDto) {
    await this.findByEmail({ email: createUserDto.email });
    this.users.push(createUserDto);

    return createUserDto;
  }

  findAll(query: FindUsersDto) {
    if (query.role) {
      this.users.find((user) => (user.role = query.role));
    } else {
      this.users;
    }
    return `This action returns all users`;
  }

  findOne(email: string) {
    return this.users.find((user) => user.email === email)[0];
  }

  update(email: string, updateUserDto: UpdateUserDto) {
    const user = this.findOne(email);
    const updatedUser = Object.assign(user, updateUserDto);
    this.users.map((user, i) => {
      if (user.email === email) {
        this.users[i] = updatedUser;
      }
    });
    return updatedUser;
  }

  remove(email: string): void {
    const user = this.findOne(email);
    const index = this.users.indexOf(user, 0);
    if (index > -1) {
      this.users = this.users.splice(index, 1);
    }
  }

  async findByEmail(user: { email: string }): Promise<boolean> {
    const users = this.users.find((user) => user.email === user.email);
    if (users) {
      throw new HttpException('user exists', HttpStatus.FOUND);
    }
    return true;
  }

  async paginate(users: UserEntity[], params: PaginationParams) {
    const skip = params.skip || 0;
    const result = users.slice(skip, params.limit + params.skip);
  }
}
