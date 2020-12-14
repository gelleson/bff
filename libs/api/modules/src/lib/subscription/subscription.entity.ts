import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { SubscriptionType } from './enums/subscription-type.enum';
import { SubscriptionTimeUnit } from './enums/subscription-time.unit';
import { BaseModel } from '@bff/api/database';

@Entity({
  name: 'subscriptions'
})
export class Subscription extends BaseModel<Subscription>{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  owner: User;

  @Column()
  name: string;

  @Column('date')
  since: Date;

  @Column('date', {
    nullable: true
  })
  until?: Date;

  @Column( {
    default: 0,
    nullable: null
  })
  trialDays?: number;

  @Column({
    type: 'decimal',
    default: 0,
    scale: 2,
    precision: 10,
  })
  amount: number;

  @Column({
    type: 'enum',
    default: SubscriptionType.ONLINE,
    enum: SubscriptionType
  })
  type: SubscriptionType;

  @Column({
    type: 'enum',
    default: SubscriptionTimeUnit.MONTH,
    enum: SubscriptionTimeUnit
  })
  intervalUnit: SubscriptionTimeUnit;

  @Column({
    default: true
  })
  isActive: boolean;

  @Column({
    default: 'KZT'
  })
  currency: string;

  @Column({
    nullable: true
  })
  lastSubscription: Date;
}
