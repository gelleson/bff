
export interface AccountObject {
  id: number;
  name: string;
  balance: number;
  currency: string;
}

export interface AccountShortObject {
  id: number;
  name: string;
}

export class TransactionObject {
  id: number;
  amount: number;
  operation: 'WITHDRAW' | 'INCOME' | 'TRANSFER';
  transactionTime: Date;
  operationDate?: string;
  credit?: AccountShortObject;
  debit?: AccountShortObject;
  narrative?: string;
}

export class PaginationObject {
  page: number;
  total: number;
  transactions: TransactionObject[];
}
