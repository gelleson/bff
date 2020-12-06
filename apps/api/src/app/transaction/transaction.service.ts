import { Injectable } from '@nestjs/common';
import { Connection, Equal, FindManyOptions, Repository, Transaction } from 'typeorm';
import { Transaction as Trn  } from './transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountService } from '../account/account.service';
import { UserService } from '../user/user.service';
import { WithdrawInput } from './dto/withdraw.input';
import { Operation } from './enums/operation.enum';
import { IncomeInput } from './dto/income.input';
import { TransferInput } from './dto/transfer.input';

@Injectable()
export class TransactionService {
  constructor(@InjectRepository(Trn) private repository: Repository<Trn>,
              private accountService: AccountService,
              private userService: UserService,
              private connection: Connection
  ) {
  }

  public find(userId: number,  date?: Date, skip?: number, take?: number) {
    return this.repository.find({
      skip: skip,
      take: take,
      loadEagerRelations: true,
      order: {
        id: 'DESC'
      },
      where: {
        createdBy: {
          id: userId,
        },
        operationDate: this.dateFormat(date),
      },
    });
  }

  public findByAccount(userId: number, account: number, date?: Date, skip?: number, take?: number) {
    return this.repository.find({
      skip: skip,
      take: take,
      loadEagerRelations: true,
      where: [
        {
          createdBy: {
            id: userId,
          },
          credit: {
            id: account
          },
          operationDate: this.dateFormat(date),
        },
        {
          createdBy: {
            id: userId,
          },
          debit: {
            id: account,
          },
          operationDate: this.dateFormat(date),
        },
      ]
    });
  }

  private dateFormat(date?: Date) {
    return date ? Equal(date.toISOString().slice(0, 10)): date;
  }

  public async withdraw(userId: number, input: WithdrawInput) {
    return this.connection.transaction(async (em) => {
      const user = await this.userService.findById(userId);
      const account = await this.accountService.subBalance(input.credit, input.amount);

      return this.repository.save(
        new Trn({
          credit: account,
          createdBy: user,
          amount: input.amount,
          operation: Operation.WITHDRAW,
          operationDate: input.operationDate ? input.operationDate : new Date(),
          transactionTime: input.operationDate ? input.operationDate : new Date()
        })
      );
    });
  }
  public async income(userId: number, input: IncomeInput) {
    return this.connection.transaction(async (_) => {
      const user = await this.userService.findById(userId);
      const account = await this.accountService.addBalance(input.debit, input.amount);

      return this.repository.save(
        new Trn({
          debit: account,
          createdBy: user,
          amount: input.amount,
          operation: Operation.INCOME,
          operationDate: input.operationDate ? input.operationDate : new Date(),
          transactionTime: input.operationDate ? input.operationDate : new Date()
        })
      );
    })
  }

  public async transfer(userId: number, input: TransferInput) {
    const user = await this.userService.findById(userId);

    return this.connection.transaction(async (em) => {
      const debit = await this.accountService.addBalance(input.debit, input.amount);
      const credit = await this.accountService.subBalance(input.credit, input.amount);

      return this.repository.save(
        new Trn({
          debit: debit,
          credit: credit,
          createdBy: user,
          amount: input.amount,
          operation: Operation.TRANSFER,
          operationDate: input.operationDate ? input.operationDate : new Date(),
          transactionTime: input.operationDate ? input.operationDate : new Date()
        })
      );
    })
  }
}
