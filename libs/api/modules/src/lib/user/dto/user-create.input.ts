import { IsEmail, IsNotEmpty, Matches, MinLength } from 'class-validator';
import { IUserCreate } from '../interface/user-create.interface';

export class UserCreateInput implements IUserCreate {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @MinLength(8)
  @Matches(/(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]*/)
  password: string;
}
