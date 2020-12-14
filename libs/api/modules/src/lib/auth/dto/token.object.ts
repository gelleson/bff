import { Expose } from 'class-transformer';

export class TokenObject {
  @Expose()
  accessToken: string;

  firstName: string;
  lastName: string;
  email: string;

  constructor(partial: Partial<TokenObject>) {
    Object.assign(this, partial);
  }
}
