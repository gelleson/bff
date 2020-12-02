import { Controller, Get } from '@nestjs/common';
import { Auth, User } from '@bff/api/auth';
import { UserModel } from './user.model';

@Auth()
@Controller('users')
export class UserController {

  @Get()
  public getProfile(@User() user: UserModel) {
    return user;
  }
}
