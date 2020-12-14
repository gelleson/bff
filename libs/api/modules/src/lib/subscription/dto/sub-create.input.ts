import { IsNotEmpty } from 'class-validator';
import { SubscriptionTimeUnit } from '../enums/subscription-time.unit';

export class SubCreateInput {
  name: string;
  intervalUnits: SubscriptionTimeUnit;
  since: Date;
  amount: number;
  until?: Date;
  trialDays?: number;
}
