import { Operation } from '@bff/api/modules';

export interface IAccountShort {
  id: number;
  name: string;
}

export interface ITransaction {
  id: number;
  amount: number;
  operation: Operation;
  transactionTime: Date;
  operationDate?: any;
  credit?: IAccountShort;
  debit?: IAccountShort;
  narrative?: string;
}
