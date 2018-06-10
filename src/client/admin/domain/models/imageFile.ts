import { Buffer } from 'buffer';
import { File } from './file';

export interface ImageFile extends File {
  metadata: Buffer;
  loadDate: Date;
}
