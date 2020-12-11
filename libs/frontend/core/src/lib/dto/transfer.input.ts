export interface TransferInput {
  amount: number;
  debit: number;
  credit: number;
  narrative: string;
  transactionTime: string | Date;
}
