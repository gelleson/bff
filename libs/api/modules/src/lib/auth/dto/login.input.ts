import { ISignIn } from '../interface';

export class LoginInput implements ISignIn {
  email: string;
  password: string;
}
