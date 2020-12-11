export interface IncomeInput {
  amount: number;
  debit: number;
  narrative?: string;
  transactionTime: string | Date;
}
