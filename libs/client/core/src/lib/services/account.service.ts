import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../tokens';
import { IAccount } from '@bff/api/modules';
import { AccountStore } from '../state';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {


  constructor(
    @Inject(BASE_URL) private baseUrl: string,
    private http: HttpClient,
    private accountStore: AccountStore
  ) {
  }

  public getAll() {
    return this.http.get<IAccount[]>(`${this.baseUrl}/accounts`)
      .pipe(
        tap(
          accounts => this.accountStore.set(accounts)
        )
      );
  }

  public update(id: number, partial: Partial<IAccount>) {
    return this.http.put<IAccount>(`${this.baseUrl}/accounts/${id}`, partial)
      .pipe(
        tap(
          account => this.accountStore.update(account.id, account)
        )
      );
  }

  public create(partial: Partial<IAccount>) {
    return this.http.post<IAccount>(`${this.baseUrl}/accounts`, partial)
      .pipe(
        tap(
          account => this.accountStore.add(account)
        )
      );
  }

  public delete(accountId: number) {
    return this.http.delete<void>(`${this.baseUrl}/accounts/${accountId}`)
      .pipe(
        tap(() => this.accountStore.remove(accountId))
      );
  }
}
