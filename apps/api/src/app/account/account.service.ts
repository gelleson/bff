import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './account.entity';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { AccountCreateInput } from './dto/account-create.input';

@Injectable()
export class AccountService {
  constructor(@InjectRepository(Account) private repository: Repository<Account>,
              private userService: UserService) {
  }

  public async create(userId: number, input: AccountCreateInput) {
    const user = await this.userService.findById(userId);

    if (!user) {
      throw new BadRequestException();
    }

    return this.repository.save(
      new Account({
        name: input.name,
        balance: input.balance,
        owner: user,
      })
    );
  }

  public async delete(accountId: number) {
    await this.repository.delete(accountId);
  }

  public async findAccountsByUser(userId: number) {
    return this.repository.find({
      where: {
        owner: {
          id: userId,
        }
      }
    })
  }
}
