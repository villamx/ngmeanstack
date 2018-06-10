import { ImageFile, VisualArt } from './models';

export class Meetup implements VisualArt {
  name: String;
  author: String;
  description: String;
  orientation: String;
  image: ImageFile;
}
