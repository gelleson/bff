import { IAccount } from '../interface/account.interface';
import { PartialBase } from '@bff/api/shared';
import { Expose } from 'class-transformer';

export class AccountObject extends PartialBase<AccountObject> implements IAccount {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  balance: number;

  @Expose()
  currency: string;
}
