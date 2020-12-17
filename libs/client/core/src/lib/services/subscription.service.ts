import { Inject, Injectable } from '@angular/core';
import { BASE_URL } from '../tokens';
import { HttpClient } from '@angular/common/http';
import { SubscriptionStore } from '../state/subscription.store';
import { tap } from 'rxjs/operators';
import { Subscription } from '../state/subscription.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(@Inject(BASE_URL) private baseUrl: string,
              private http: HttpClient,
              private subscriptionStore: SubscriptionStore
  ) {

  }

  public all() {
    return this.http.get<Subscription[]>(`${this.baseUrl}/subscriptions`)
      .pipe(
        tap(sb => this.subscriptionStore.set(sb))
      );
  }

  public create(payload: Subscription) {
    return this.http.post<Subscription[]>(`${this.baseUrl}/subscriptions`, payload)
      .pipe(
        tap(sb => this.subscriptionStore.add(sb))
      );
  }

  public update(id: number, payload: Subscription) {
    return this.http.put<Subscription[]>(`${this.baseUrl}/subscriptions/${id}`, payload)
      .pipe(
        tap(sb => this.subscriptionStore.add(sb))
      );
  }

  public delete(id: number) {
    return this.http.post<Subscription[]>(`${this.baseUrl}/subscriptions/${id}`, id)
      .pipe(
        tap(() => this.subscriptionStore.remove(id))
      );
  }
}
