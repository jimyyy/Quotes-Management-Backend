import { ApiProperty } from '@nestjs/swagger';
export class CreateQuoteDto {
  @ApiProperty()
  readonly title: string;
  @ApiProperty()
  readonly author: string;
}
