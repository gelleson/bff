import { TransactionOutput } from './transaction.output';
import { Transaction } from '../transaction.entity';
import { Expose } from 'class-transformer';

export class PaginationOutput {
  @Expose()
  page: number;
  @Expose()
  total: number;
  @Expose()
  transactions: TransactionOutput[];

  constructor(page: number, transactions: Transaction[]) {
    this.page = page;
    this.transactions = TransactionOutput.array(transactions);
    this.total = this.transactions.length;
  }
}
