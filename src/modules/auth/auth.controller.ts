import { Controller, Post, Body, Inject } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { CreateAdminDto, CreateUserDto } from '../user/dto/create-user.dto';
import { IUserService } from '../user/interfaces/user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    @Inject('IUserService') private readonly userService: IUserService,
  ) {}

  @Post('register/admin')
  registerAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.userService.create(createAdminDto);
  }

  @Post('register/user')
  register(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('login')
  login(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.login(createAuthDto);
  }
}
