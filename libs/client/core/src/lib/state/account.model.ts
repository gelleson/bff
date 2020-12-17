import { IAccount } from '@bff/api/modules';

export interface Account extends IAccount {
  id: number;
}

export function createAccount(params: Partial<Account>) {
  return {

  } as Account;
}
