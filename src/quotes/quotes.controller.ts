import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { Quote } from './interfaces/quote.interface';
import { QuotesService } from './quotes.service';
import { ApiTags, ApiParam } from '@nestjs/swagger';

@ApiTags('quotes')
@Controller('quotes')
export class QuotesController {
  constructor(private quoresService: QuotesService) {}
  @Get()
  findQuotes(): Promise<Quote[]> {
    return this.quoresService.getQuotes();
  }
  @Post()
  async createQuote(@Body() createQuoteDto: CreateQuoteDto): Promise<Quote> {
    try {
      return await this.quoresService.createQuote(createQuoteDto);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }
  @ApiParam({ name: 'id' })
  @Get(':id')
  getQuote(@Param('id') id): Promise<Quote> {
    return this.quoresService.getQuote(id);
  }
  @ApiParam({ name: 'id' })
  @Put(':id')
  updateQuote(
    @Param('id') id,
    @Body() updateQuoteDto: CreateQuoteDto,
  ): Promise<Quote> {
    return this.quoresService.updateQuote(id, updateQuoteDto);
  }
  @ApiParam({ name: 'id' })
  @Delete(':id')
  deleteQuote(@Param('id') id): Promise<any> {
    return this.quoresService.deleteQuote(id);
  }
}
