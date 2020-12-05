import { Injectable } from '@nestjs/common';
import { Equal, FindManyOptions, Repository, Transaction as TransactionDB } from 'typeorm';
import { Transaction } from './transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountService } from '../account/account.service';
import { UserService } from '../user/user.service';
import { WithdrawInput } from './dto/withdraw.input';
import { Operation } from './enums/operation.enum';
import { IncomeInput } from './dto/income.input';

@Injectable()
export class TransactionService {
  constructor(@InjectRepository(Transaction) private repository: Repository<Transaction>,
              private accountService: AccountService,
              private userService: UserService
  ) {
  }

  public find(userId: number, account: number, date?: Date, skip?: number, take?: number) {
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
    const user = await this.userService.findById(userId);
    const account = await this.accountService.subBalance(input.credit, input.amount);

    return this.repository.save(
      new Transaction({
        credit: account,
        createdBy: user,
        amount: input.amount,
        operation: Operation.WITHDRAW,
        operationDate: input.operationDate ? input.operationDate : new Date(),
        transactionTime: input.operationDate ? input.operationDate : new Date()
      })
    );
  }

  public async income(userId: number, input: IncomeInput) {
    const user = await this.userService.findById(userId);
    const account = await this.accountService.addBalance(input.debit, input.amount);

    return this.repository.save(
      new Transaction({
        debit: account,
        createdBy: user,
        amount: input.amount,
        operation: Operation.INCOME,
        operationDate: input.operationDate ? input.operationDate : new Date(),
        transactionTime: input.operationDate ? input.operationDate : new Date()
      })
    );
  }
}
