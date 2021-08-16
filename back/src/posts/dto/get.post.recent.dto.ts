import { ApiProperty } from '@nestjs/swagger';

export class GetPostRecentDto {
  @ApiProperty({
    example: 10,
    description: '한 번에 가져올 개수',
    required: true,
  })
  public perPage: number;

  @ApiProperty({
    example: 1,
    description: '불러올 페이지',
    required: true,
  })
  public page: number;
}
