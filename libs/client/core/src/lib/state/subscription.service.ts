import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SubscriptionStore } from './subscription.store';

@Injectable({ providedIn: 'root' })
export class SubscriptionService {

  constructor(private subscriptionStore: SubscriptionStore, private http: HttpClient) {
  }

  get() {
    return this.http.get('').pipe(tap(entities => this.subscriptionStore.set(entities)));
  }

}
