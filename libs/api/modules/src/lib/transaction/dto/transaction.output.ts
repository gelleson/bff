import { Operation } from '../enums/operation.enum';
import { Transaction } from '../transaction.entity';
import { Account } from '../../account/account.entity';
import { isNumber } from 'util';
import { Expose } from 'class-transformer';
import { BaseModel } from '@bff/api/database';

export class AccountShort extends BaseModel<AccountShort>{
  @Expose()
  id: number;
  @Expose()
  name: string;
}

export class TransactionOutput {
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

  constructor(transaction: Transaction) {
    this.id = transaction.id;
    this.amount = transaction.amount;
    this.operation = transaction.operation;
    this.transactionTime = transaction.transactionTime;
    this.operationDate = transaction.operationDate;
    this.credit = this.getId(transaction.credit);
    this.debit = this.getId(transaction.debit);
    this.narrative = transaction.narrative;
  }

  public static array(transactions: Transaction[]) {
    return transactions.map(transaction => new TransactionOutput(transaction));
  }

  private getId(account: Account | number): AccountShort | undefined {
    if (account instanceof Account && account?.id !== undefined) {
      return new AccountShort({
        id: account.id,
        name: account.name
      });
    }

    return null;
  }
}
