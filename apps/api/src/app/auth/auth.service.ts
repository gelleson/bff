import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserCreateInput } from '../user/dto/user-create.input';
import { JwtService } from '@nestjs/jwt';
import { classToPlain } from 'class-transformer';
import { LoginInput } from './dto/login.input';
import { compareSync } from 'bcrypt';
import { TokenObject } from './dto/token.object';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {
  }

  public async register(input: UserCreateInput) {
    const user = await this.userService.create(input);

    return new TokenObject(
      this.jwtService.sign(user.toObject())
    );
  }

  public async login(input: LoginInput) {
    const user = await this.userService.findByEmail(input.email);

    if (!user || !compareSync(input.password, user.password)) {
      throw new UnauthorizedException();
    }

    return new TokenObject(
      this.jwtService.sign(user.toObject())
    );
  }
}
