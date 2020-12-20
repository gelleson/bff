import { ICategoryShort } from './category';

export interface IAccountShort {
  id: number;
  name: string;
  currency: string;
}

export interface ITransaction {
  id: number;
  amount: number;
  operation: 'WITHDRAW' | 'INCOME' | 'TRANSFER';
  transactionTime: Date;
  operationDate?: any;
  credit?: IAccountShort;
  debit?: IAccountShort;
  narrative?: string;
  category?: ICategoryShort;
}
