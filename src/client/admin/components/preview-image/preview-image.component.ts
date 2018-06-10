import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ImageFile } from '../../domain/models';

@Component({
  selector: 'adm-preview-image',
  templateUrl: './preview-image.component.html',
  styleUrls: ['./preview-image.component.scss']
})
export class PreviewImageComponent implements OnInit {
  @Output() loadedImage = new EventEmitter<ImageFile>();
  image: ImageFile;

  constructor() { }

  ngOnInit() {
    this.image = <ImageFile>{};
  }

  onSelect(ev) {
    const file = ev.target.files[0];
    if (/\.(jpe?g|png)$/i.test(file.name)) {
      console.log(file.name, file.mimeType, file.size);
      this.image.name = file.name;
      this.image.type = file.mimeType;
      this.image.size = file.size;

      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.image.loadDate = new Date();
        this.image.metadata = reader.result;
        this.loadedImage.emit(this.image);
      }, false);
      reader.readAsDataURL(file);
    }
  }

}
