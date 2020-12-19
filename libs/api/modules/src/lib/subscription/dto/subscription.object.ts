import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/user.entity';
import { SubscriptionType } from '../enums/subscription-type.enum';
import { SubscriptionTimeUnit } from '../enums/subscription-time.unit';
import { Subscription } from '../subscription.entity';
import { BaseModel } from '@bff/api/database';
import { AutoMap } from 'nestjsx-automapper';
import { Expose } from 'class-transformer';
import { ISubscription } from '../schema';


export class SubscriptionObject extends BaseModel<SubscriptionObject> implements ISubscription {
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

  public static of(model: ISubscription): SubscriptionObject {
    return new SubscriptionObject({
      ...model
    });
  }

  public static array(models: ISubscription[]) {
    return models.map(subscription => SubscriptionObject.of(subscription));
  }
}
