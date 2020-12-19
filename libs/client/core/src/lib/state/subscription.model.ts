import { ID } from '@datorama/akita';
import { ISubscription } from '@bff/api/modules';

export interface Subscription extends ISubscription{
  id: number;
}

export function createSubscription(params: Partial<Subscription>) {
  return {

  } as Subscription;
}
