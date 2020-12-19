import { Expose } from 'class-transformer';
import { BaseModel } from '@bff/api/database';
import { Operation } from '../enums/operation.enum';
import { Transaction } from '../entities/transaction.entity';
import { Account, IAccount } from '../../account';
import { IAccountShort, ICategoryShort, ITransaction } from '../interface';
import { Category } from '../entities/category.entity';

export class AccountShort extends BaseModel<AccountShort> implements IAccountShort{
  @Expose()
  id: number;
  @Expose()
  name: string;
  @Expose()
  currency: string;
}

export class CategoryShort extends BaseModel<CategoryShort> implements ICategoryShort {
  @Expose()
  id: number;
  @Expose()
  name: string;
  @Expose()
  isGlobal: boolean;
}

export class TransactionObject implements ITransaction {
  @Expose()
  id: number;
  @Expose()
  amount: number;
  @Expose()
  operation: Operation;
  @Expose()
  transactionTime: Date;
  @Expose()
  operationDate?: any;
  @Expose()
  credit?: AccountShort;
  @Expose()
  debit?: AccountShort;
  @Expose()
  narrative?: string;
  @Expose()
  category?: ICategoryShort;

  constructor(transaction: Transaction) {
    this.id = transaction.id;
    this.amount = transaction.amount;
    this.operation = transaction.operation;
    this.transactionTime = transaction.transactionTime;
    this.operationDate = transaction.operationDate;
    this.credit = this.getId(transaction.credit);
    this.debit = this.getId(transaction.debit);
    this.narrative = transaction.narrative;
    this.category = this.getCategoryShort(transaction.category);
  }

  private getCategoryShort(category: Category | undefined): ICategoryShort | undefined {
    if (!category) {
      return undefined;
    }

    return new CategoryShort({
        id: category.id,
        name: category.name,
        isGlobal: category.isGlobal,
      })
  }

  public static array(transactions: Transaction[]) {
    return transactions.map(transaction => new TransactionObject(transaction));
  }

  private getId(account: Partial<IAccount> | number): AccountShort | undefined {
    if (account instanceof Account && account?.id !== undefined) {
      return new AccountShort({
        id: account.id,
        name: account.name,
        currency: account.currency,
      });
    }

    return null;
  }
}
