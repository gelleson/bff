import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserCreateInput } from '../user/dto/user-create.input';
import { LoginInput } from './dto/login.input';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {
  }

  @Post("sign-up")
  public register(@Body() payload: UserCreateInput) {
    return this.authService.register(payload);
  }

  @Post("sign-in")
  public login(@Body() payload: LoginInput) {
    return this.authService.login(payload);
  }
}
