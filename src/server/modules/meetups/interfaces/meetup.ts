import { Document } from 'mongoose';

export interface Meetup extends Document {
  readonly name: string;
  readonly author: string;
  readonly description: string;
  readonly orientation: string;
}
