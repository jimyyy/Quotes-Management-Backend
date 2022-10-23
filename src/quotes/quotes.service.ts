import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quote } from './interfaces/quote.interface';

@Injectable()
export class QuotesService {
  constructor(
    @InjectModel('Quote') private readonly quoteModel: Model<Quote>,
  ) {}
  async getQuotes(): Promise<Quote[]> {
    return await this.quoteModel.find().exec();
  }

  async getQuote(id: string): Promise<Quote> {
    try {
      return await this.quoteModel.findById(id).exec();
    } catch (err) {
      throw new HttpException('Quote Not Found', HttpStatus.NOT_FOUND);
    }
  }

  async createQuote(quote: Quote): Promise<Quote> {
    const newQuote = await new this.quoteModel(quote);
    return newQuote.save();
  }

  async updateQuote(id: string, updateQuoteDto): Promise<Quote> {
    return await this.quoteModel.findByIdAndUpdate(id, updateQuoteDto);
  }

  async deleteQuote(id: string): Promise<any> {
    return await this.quoteModel.findByIdAndRemove(id);
  }
}
