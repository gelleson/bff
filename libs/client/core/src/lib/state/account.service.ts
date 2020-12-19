import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AccountStore } from './account.store';

@Injectable({ providedIn: 'root' })
export class AccountService {

  constructor(private accountStore: AccountStore, private http: HttpClient) {
  }

  get() {
    return this.http.get('').pipe(tap(entities => this.accountStore.set(entities)));
  }

}
