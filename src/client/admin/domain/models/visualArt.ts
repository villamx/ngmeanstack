import { ImageFile } from './imageFile';

export interface VisualArt {
  name: String;
  author: String;
  description: String;
  orientation: String;
  image: ImageFile;
}
