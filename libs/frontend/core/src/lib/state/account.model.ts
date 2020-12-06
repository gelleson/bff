import { ID } from '@datorama/akita';
import { AccountObject } from '@bff/interface';

export interface Account extends AccountObject{
  id: number;
}

export function createAccount(params: Partial<Account>) {
  return {

  } as Account;
}
