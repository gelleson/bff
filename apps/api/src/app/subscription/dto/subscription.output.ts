import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/user.entity';
import { SubscriptionType } from '../enums/subscription-type.enum';
import { SubscriptionTimeUnit } from '../enums/subscription-time.unit';
import { Subscription } from '../subscription.entity';
import { BaseModel } from '@bff/api/database';
import { AutoMap } from 'nestjsx-automapper';
import { Expose } from 'class-transformer';


export class SubscriptionOutput extends BaseModel<SubscriptionOutput> {
  @Expose()
  id: number;
  @Expose()

  name: string;
  @Expose()

  since: Date;
  @Expose()

  until?: Date;
  @Expose()

  trialDays?: number;
  @Expose()

  amount: number;

  @Expose()
  type: SubscriptionType;

  @Expose()
  intervalUnit: SubscriptionTimeUnit;

  @Expose()
  currency: string;

  @Expose()
  isActive: boolean;

  @Expose()
  lastSubscription: Date;

  public static of(model: Subscription): SubscriptionOutput {
    return new SubscriptionOutput({
      ...model
    });
  }

  public static array(models: Subscription[]) {
    return models.map(subscription => SubscriptionOutput.of(subscription));
  }
}
