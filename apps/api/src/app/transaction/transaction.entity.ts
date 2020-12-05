import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Account } from '../account/account.entity';
import { Operation } from './enums/operation.enum';
import { BaseModel } from '@bff/api/database';
import { User } from '../user/user.entity';
import { Exclude } from 'class-transformer';

@Entity({
  name: 'transactions'
})
export class Transaction extends BaseModel<Transaction>{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Account, {
    nullable: true,
    eager: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  credit?: Account;

  @ManyToOne(() => Account, {
    nullable: true,
    eager: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  debit?: Account;

  @ManyToOne(() => User, {
    onDelete: 'SET NULL',
  })
  @Exclude()
  createdBy: User;

  @Column('simple-enum')
  operation: Operation;

  @Column({
    type: 'decimal',
    default: 0,
    scale: 2,
    precision: 2,
  })
  amount: number;

  @Column('date')
  operationDate: Date;

  @Column()
  transactionTime: Date;
}
