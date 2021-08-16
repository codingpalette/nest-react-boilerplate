import { ApiProperty } from '@nestjs/swagger';

export class getPostDto {
  @ApiProperty({
    example: 1,
    description: '페이지 번호',
    required: true,
  })
  public id: number;
}
