import * as mongoose from 'mongoose';

export const QuoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please enter Quote title'],
  },
  author: {
    type: String,
    required: [true, 'Please enter author quote'],
  },
});
