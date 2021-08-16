import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  async getPostRecent(perPage: number, page: number) {
    return true;
  }

  async getPost(id: number) {
    return true;
  }
}
