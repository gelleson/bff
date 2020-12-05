import { TransactionOutput } from './transaction.output';
import { Transaction } from '../transaction.entity';

export class PaginationOutput {
  page: number;
  total: number;
  transactions: TransactionOutput[];

  constructor(page: number, transactions: Transaction[]) {
    this.page = page;
    this.transactions = TransactionOutput.array(transactions);
    this.total = this.transactions.length;
  }
}
