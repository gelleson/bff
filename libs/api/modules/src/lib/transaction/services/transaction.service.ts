import { Injectable } from '@nestjs/common';
import { Connection, Equal, FindManyOptions, Repository } from 'typeorm';
import { Transaction  } from '../entities/transaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountService } from '../../account/account.service';
import { UserService } from '../../user/user.service';
import { Operation } from '../enums/operation.enum';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import { IncomeInput, TransferInput, WithdrawInput } from '../dto';
import { Account } from '../../account';
import { CategoryService } from './category.service';
import { Category } from '../entities/category.entity';

@Injectable()
export class TransactionService {
  constructor(@InjectRepository(Transaction) private repository: Repository<Transaction>,
              private accountService: AccountService,
              private userService: UserService,
              private categoryService: CategoryService,
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

  @Transactional()
  public async withdraw(userId: number, input: WithdrawInput) {
    const user = await this.userService.findById(userId);
    const account = await this.accountService.subBalance(input.credit, input.amount);

    let category: Category;

    if (input.categoryId) {
      category = await this.categoryService.findOrFail(input.categoryId);
    }

    return this.repository.save(
      new Transaction({
        credit: new Account({ id: account.id }),
        createdBy: user,
        amount: input.amount,
        category: category,
        operation: Operation.WITHDRAW,
        operationDate: input.operationDate ? input.operationDate : new Date(),
        transactionTime: input.operationDate ? input.operationDate : new Date()
      })
    );
  }

  @Transactional()
  public async income(userId: number, input: IncomeInput) {
    const user = await this.userService.findById(userId);
    const account = await this.accountService.addBalance(input.debit, input.amount);

    let category: Category;

    if (input.categoryId) {
      category = await this.categoryService.findOrFail(input.categoryId);
    }

    return this.repository.save(
      new Transaction({
        debit: new Account({ id: account.id }),
        createdBy: user,
        amount: input.amount,
        category: category,
        operation: Operation.INCOME,
        operationDate: input.operationDate ? input.operationDate : new Date(),
        transactionTime: input.operationDate ? input.operationDate : new Date()
      })
    );
  }

  @Transactional()
  public async transfer(userId: number, input: TransferInput) {
    const user = await this.userService.findById(userId);

    const debit = await this.accountService.addBalance(input.debit, input.amount);
    const credit = await this.accountService.subBalance(input.credit, input.amount);

    let category: Category;

    if (input.categoryId) {
      category = await this.categoryService.findOrFail(input.categoryId);
    }

    return this.repository.save(
      new Transaction({
        debit: new Account({ id: debit.id }),
        credit: new Account({ id: credit.id }),
        createdBy: user,
        category: category,
        amount: input.amount,
        operation: Operation.TRANSFER,
        operationDate: input.operationDate ? input.operationDate : new Date(),
        transactionTime: input.operationDate ? input.operationDate : new Date()
      })
    );
  }

  @Transactional()
  public async delete(id: number) {
    const transaction = await this.repository.findOne(id);

    if (transaction.credit) {
      await this.accountService.addBalance(transaction.credit.id, transaction.amount);
    }

    if (transaction.debit) {
      await this.accountService.subBalance(transaction.debit.id, transaction.amount);
    }

    await this.repository.delete(id);
  }
}
