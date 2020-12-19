import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Subscription } from './subscription.model';

export interface SubscriptionState extends EntityState<Subscription> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'subscription'
})
export class SubscriptionStore extends EntityStore<SubscriptionState> {

  constructor() {
    super();
  }

}
