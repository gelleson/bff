import { IsEmail, IsNotEmpty, Matches, MinLength } from 'class-validator';

export class UserCreateInput {
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
