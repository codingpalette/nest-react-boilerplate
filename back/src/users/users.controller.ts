import { Body, Controller, Get, Post } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {}

  @ApiOperation({ summary: '회원가입' })
  @Post()
  async postUsers(@Body() body: JoinRequestDto) {
    await this.usersService.postUsers(body.email, body.nickname, body.password);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  logIn() {}

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logOut() {}
}
