import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { Users } from '../entities/Users';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) {}

  async postUsers(email: string, nickname: string, password: string) {
    if (!email) {
      throw new HttpException('이메일이 없네요', 400);
    }

    const user = await this.usersRepository.findOne({
      where: { email },
      select: ['id', 'email', 'nickname', 'password'],
    });

    if (user) {
      // 이미 존재하는 유저 error
      throw new Error('이미 사용되 이메일 입니다');
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    await this.usersRepository.save({
      email,
      nickname,
      password: hashedPassword,
    });

    return true;
  }
}
