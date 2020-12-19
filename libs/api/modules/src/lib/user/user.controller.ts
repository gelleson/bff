import { Controller, Get } from '@nestjs/common';
import { Auth, CurrentUser } from '@bff/api/auth';
import { User } from './user.entity';

@Auth()
@Controller('users')
export class UserController {

  @Get()
  public getProfile(@CurrentUser() user: User) {
    return user;
  }
}
