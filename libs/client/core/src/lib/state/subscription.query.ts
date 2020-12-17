import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SubscriptionStore, SubscriptionState } from './subscription.store';

@Injectable({ providedIn: 'root' })
export class SubscriptionQuery extends QueryEntity<SubscriptionState> {

  constructor(protected store: SubscriptionStore) {
    super(store);
  }

}
