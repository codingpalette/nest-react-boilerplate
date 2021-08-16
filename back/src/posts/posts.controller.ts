import { Controller, Get, Param, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { GetPostRecentDto } from './dto/get.post.recent.dto';
import { getPostDto } from './dto/get.post.dto';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @ApiQuery({
    name: 'perPage',
    description: '한 번에 가져올 개수',
    required: true,
  })
  @ApiQuery({
    name: 'page',
    description: '불러올 페이지',
    required: true,
  })
  @Get('recent')
  async getPostRecent(@Query() query: GetPostRecentDto) {
    return await this.postsService.getPostRecent(query.perPage, query.page);
  }

  @ApiParam({
    name: 'id',
    description: '페이지 번호',
    required: true,
  })
  @Get(':id')
  async getPost(@Param() param: getPostDto) {
    return await this.postsService.getPost(param.id);
  }
}
