export class TokenObject {
  accessToken: string;

  firstName: string;
  lastName: string;
  email: string;

  constructor(partial: Partial<TokenObject>) {
    Object.assign(this, partial);
  }
}
