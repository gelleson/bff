import { Expose } from 'class-transformer';
import { IToken } from '../interface';

export class TokenObject implements IToken {
  @Expose()
  accessToken: string;

  firstName: string;
  lastName: string;
  email: string;

  constructor(partial: Partial<TokenObject>) {
    Object.assign(this, partial);
  }
}
