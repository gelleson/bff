import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserCreateInput } from './dto/user-create.input';
import { hashSync } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repository: Repository<User>) {
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
      new User({
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        password: hashSync(input.password, 11),
      })
    );
  }

  public findById(id: number) {
    return this.repository.findOne(id);
  }

  public async updateLastLoginDate(userId: number, date?: Date): Promise<void> {
    await this.repository.update(userId, {
      lastLogin: date ? date : new Date()
    })
  }

  public findByEmail(email: string) {
    return this.repository.findOne({
      where: {
        email: email
      }
    });
  }
}
