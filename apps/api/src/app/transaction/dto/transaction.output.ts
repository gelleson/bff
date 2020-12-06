import { Operation } from '../enums/operation.enum';
import { Transaction } from '../transaction.entity';
import { Account } from '../../account/account.entity';
import { isNumber } from 'util';

export interface AccountShort {
  id: number;
  name: string;
}

export class TransactionOutput {
  id: number;
  amount: number;
  operation: Operation;
  transactionTime: Date;
  operationDate?: any;
  credit?: AccountShort;
  debit?: AccountShort;

  constructor(transaction: Transaction) {
    this.id = transaction.id;
    this.amount = transaction.amount;
    this.operation = transaction.operation;
    this.transactionTime = transaction.transactionTime;
    this.operationDate = transaction.operationDate;
    this.credit = this.getId(transaction.credit);
    this.debit = this.getId(transaction.debit);
  }

  public static array(transactions: Transaction[]) {
    return transactions.map(transaction => new TransactionOutput(transaction));
  }

  private getId(account: Account | number): {
    id: number;
    name: string;
  } | undefined {
    if (account instanceof Account && account?.id !== undefined) {
      return {
        id: account.id,
        name: account.name
      };
    }

    return null;
  }
}
