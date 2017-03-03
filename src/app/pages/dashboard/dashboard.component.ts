import {Component} from '@angular/core';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  tags: Array<string>;
  isCheckin: boolean;
  constructor() {
    this.tags = ['manager', 'fininacial'];
    this.isCheckin = true;
  }

}
