import { IsNotEmpty } from 'class-validator';
import { SubscriptionTimeUnit } from '../enums/subscription-time.unit';
import { Expose } from 'class-transformer';
import { SubscriptionType } from '../enums/subscription-type.enum';

export class SubUpdateInput {
  @Expose()
  name: string;

  @Expose()
  intervalUnit: SubscriptionTimeUnit;

  @Expose()
  since: Date;

  @Expose()
  amount: number;

  @Expose()
  until?: Date;

  @Expose()
  trialDays?: number;

  @Expose()
  type?: SubscriptionType;

  @Expose()
  isActive: boolean;
}
