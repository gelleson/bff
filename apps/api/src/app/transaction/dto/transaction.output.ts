import { Operation } from '../enums/operation.enum';
import { Transaction } from '../transaction.entity';
import { Account } from '../../account/account.entity';
import { isNumber } from 'util';

export class TransactionOutput {
  amount: number;
  operation: Operation;
  transactionTime: Date;
  operationDate?: string;
  credit?: number;
  debit?: number;

  constructor(transaction: Transaction) {
    this.amount = transaction.amount;
    this.operation = transaction.operation;
    this.transactionTime = transaction.transactionTime;
    this.credit = this.getId(transaction.credit);
    this.debit = this.getId(transaction.debit);
  }

  public static array(transactions: Transaction[]) {
    return transactions.map(transaction => new TransactionOutput(transaction));
  }

  private getId(account: Account | number): number | undefined {
    if (account instanceof Account && account?.id !== undefined) {
      return account.id;
    }

    if (isNumber(account)) {
      return account;
    }

    return null;
  }
}
