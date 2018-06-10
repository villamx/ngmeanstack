import { Component, OnInit } from '@angular/core';

import { RestService } from '../../services/api';
import { MeetupsService } from '../../services';
import { Meetup } from '../../domain';
import { ImageFile } from '../../domain/models';

@Component({
  selector: 'adm-meetup-manager',
  templateUrl: './meetup-manager.component.html',
  styleUrls: ['./meetup-manager.component.scss'],
  providers: [{provide: RestService, useClass: MeetupsService}]
})
export class MeetupManagerComponent implements OnInit {
  meetup = new Meetup();

  constructor(private meetupsService: RestService<Meetup>) {
  }

  ngOnInit() {
  }

  onLoadedImage(file: ImageFile) {
    console.log('onLoadedImage', JSON.stringify(file));
    this.meetup.image = file;
  }

  addMeetup() {
    this.meetupsService.create(this.meetup).subscribe(meetup => {
      console.log(meetup);
    });
  }

}
