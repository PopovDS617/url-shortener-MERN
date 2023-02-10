import mongoose, { Document } from 'mongoose';
import { customAlphabet } from 'nanoid';
import { ShortUrl } from '../@types/models';

const nanoid = customAlphabet('abcdefghijklmnopqrstuv0987654321', 6);

const schema = new mongoose.Schema({
  shortId: {
    type: String,
    unique: true,
    required: true,
    default: () => nanoid(),
  },
  destination: { type: String, required: true },
});

const shortUrl = mongoose.model<ShortUrl>('shortUrl', schema);

export default shortUrl;
