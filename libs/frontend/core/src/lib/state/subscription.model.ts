import { ID } from '@datorama/akita';
import { Expose } from 'class-transformer';
import { SubscriptionType } from '../../../../../../apps/api/src/app/subscription/enums/subscription-type.enum';
import { SubscriptionTimeUnit } from '../../../../../../apps/api/src/app/subscription/enums/subscription-time.unit';

export interface Subscription {
  id: number;
  name: string;
  currency: string;
  since: Date;
  until?: Date;
  trialDays?: number;
  amount: number;
  type: SubscriptionType;
  intervalUnit: SubscriptionTimeUnit;
  isActive: boolean;
  lastSubscription: Date;
}

export function createSubscription(params: Partial<Subscription>) {
  return {

  } as Subscription;
}
