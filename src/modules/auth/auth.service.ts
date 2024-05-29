import { Inject, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { isMatch } from 'src/lib/bcrypt';
import { IUserService } from '../user/interfaces/user.service';
import { LoginOrPasswordWrong } from './exceptions/auth.exception';
import { JwtService } from '@nestjs/jwt';
import { ResponseData } from 'src/lib/response-data';

@Injectable()
export class AuthService {
  constructor(
    @Inject('IUserService') private readonly userService: IUserService,
    private jwtService: JwtService,
  ) {}

  async login(createAuthDto: CreateAuthDto) {
    const foundUserByLogin = await this.userService.findByLogin(
      createAuthDto.login,
    );

    if (!foundUserByLogin) {
      throw new LoginOrPasswordWrong();
    }

    if (!isMatch(createAuthDto.password, foundUserByLogin.password)) {
      throw new LoginOrPasswordWrong();
    }

    const token = await this.jwtService.signAsync({ id: foundUserByLogin.id });

    return new ResponseData('success', 200, {
      user: foundUserByLogin,
      token,
    });
  }
}
