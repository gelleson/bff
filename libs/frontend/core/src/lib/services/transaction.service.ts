import { Inject, Injectable } from '@angular/core';
import { BASE_URL } from '../tokens';
import { HttpClient } from '@angular/common/http';
import { PaginationObject, TransactionObject } from '@bff/interface';
import { WithdrawInput } from '../dto/withdraw.input';
import { IncomeInput } from '../dto/income.input';
import { AccountService } from './account.service';
import { map, tap } from 'rxjs/operators';
import { TransferInput } from '../dto/transfer.input';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private http: HttpClient,
    private accountService: AccountService
  ) {
  }

  public getTransactionsByDate(date: string) {
    return this.http.get<PaginationObject>(`${this.baseUrl}/transactions?date=${date}`);
  }

  public getTransactions(date: Date) {
    const formattedDate = date.toISOString().slice(0, 10);

    return this.http.get<PaginationObject>(`${this.baseUrl}/transactions?date=${formattedDate}`);
  }

  public withdraw(withdraw: WithdrawInput) {
    return this.http.post(`${this.baseUrl}/transactions/withdraw`, withdraw);
  }

  public income(income: IncomeInput) {
    return this.http.post(`${this.baseUrl}/transactions/income`, income);
  }

  public transfer(transfer: TransferInput) {
    return this.http.post(`${this.baseUrl}/transactions/transfer`, transfer);
  }

  public async totalSpendMoney(date: Date) {
    const response = await this.getTransactions(date).toPromise();
    return response.transactions
      .filter(transaction => transaction.operation === 'WITHDRAW')
      .reduce((prev, curr) => prev + curr.amount, 0);
  }

  public delete(id: number) {
    return this.http.delete(`${this.baseUrl}/transactions/${id}`);
  }
}
