import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserModel } from './user.model';
import { Repository } from 'typeorm';
import { UserCreateInput } from './dto/user-create.input';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserModel) private repository: Repository<UserModel>) {
  }

  public async checkEmail(email: string) {
    const user = await this.repository.findOne({
      where: {
        email: email
      }
    });

    return !!user;
  }

  public create(input: UserCreateInput) {
    return this.repository.save(
      new UserModel({
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        password: input.password,
      })
    );
  }
}
