import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { MatGridList } from '@angular/material';

@Component({
  selector: 'pub-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.scss']
})
export class MeetupsComponent implements OnInit, AfterContentInit {
  @ViewChild('grid') grid: MatGridList;
  gridByBreakpoint = {
    xl: 8,
    lg: 6,
    md: 4,
    sm: 2,
    xs: 1
  };

  constructor(private observableMedia: ObservableMedia) {
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      console.log(' mqAlias:', change.mqAlias, ' cols:', this.grid.cols);
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }

}
