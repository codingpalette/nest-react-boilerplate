import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { User } from '../decorators/user.decorator';
import { LoginDto } from './dto/login.dto';
import { Users } from '../entities/Users';
import { LoggedInGuard } from '../auth/logged-in.guard';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(@User() user: Users) {
    return user;
  }

  @ApiOperation({ summary: '회원가입' })
  @Post()
  async postUsers(@Body() body: JoinRequestDto) {
    await this.usersService.postUsers(body.email, body.nickname, body.password);
  }

  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: '로그인' })
  @ApiQuery({
    name: 'email',
    description: '이메일',
    required: true,
  })
  @ApiQuery({
    name: 'password',
    description: '패스워드',
    required: true,
  })
  @Post('login')
  logIn(@User() user: LoginDto) {
    return user;
  }

  @UseGuards(LoggedInGuard)
  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logOut(@Req() req, @Res() res) {
    req.logOut();
    req.session.destroy();
    res.clearCookie('connect.sid', { httpOnly: true });
    return res.send('ok');
  }
}
