import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from './account.entity';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { AccountCreateInput } from './dto/account-create.input';
import { AccountUpdateInput } from './dto/account-update.input';
import { AccountObject } from './dto/account.object';
import { IAccount } from './interface/account.interface';

@Injectable()
export class AccountService {
  constructor(@InjectRepository(Account) private repository: Repository<Account>,
              private userService: UserService) {
  }

  public async create(userId: number, input: AccountCreateInput): Promise<IAccount> {
    const user = await this.userService.findById(userId);

    if (!user) {
      throw new BadRequestException();
    }

    return new AccountObject(
      await this.repository.save(
        new Account({
          name: input.name,
          balance: input.balance,
          owner: user,
          currency: input.currency
        })
      )
    );
  }

  public async update(accountId: number, partial: AccountUpdateInput): Promise<IAccount> {
    const accountState = await this.repository.update(accountId, {
      name: partial.name,
      currency: partial.currency,
      balance: partial.balance
    });

    return new AccountObject(
      await this.repository.findOne(accountId)
    );
  }

  public async delete(accountId: number) {
    await this.repository.delete(accountId);
  }

  public async findAccountsByUser(userId: number): Promise<IAccount[]> {
    const accounts = await this.repository.find({
      where: {
        owner: {
          id: userId
        }
      }
    });

    return accounts.map(account => new AccountObject(account));
  }

  public async addBalance(accountId: number, amount: number): Promise<Account> {
    const account = await this.repository.findOne(accountId);

    if (!account) {
      throw new BadRequestException();
    }

    account.balance = Number(account.balance) + amount;

    return this.repository.save(account);
  }

  public async subBalance(accountId: number, amount: number) {
    const account = await this.repository.findOne(accountId);

    if (!account) {
      throw new BadRequestException();
    }

    account.balance = Number(account.balance) - amount;

    return this.repository.save(account);
  }
}
