import { SubscriptionTimeUnit, SubscriptionType } from '../enums';

export interface ISubscription {
  id: number;
  name: string;
  since: Date;
  until?: Date;
  trialDays?: number;
  amount: number;
  type: SubscriptionType;
  intervalUnit: SubscriptionTimeUnit;
  currency: string;
  isActive: boolean;
  lastSubscription: Date;
}
