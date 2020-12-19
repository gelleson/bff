import { BaseModel } from '@bff/api/database';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Exclude } from 'class-transformer';

@Entity({
  name: 'accounts'
})
export class Account extends BaseModel<Account>{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User)
  @Exclude()
  owner: User;

  @Column({
    type: 'decimal',
    default: 0,
    scale: 2,
    precision: 10,
  })
  balance: number;

  @Column({
    default: 'KZT'
  })
  currency: string;
}
