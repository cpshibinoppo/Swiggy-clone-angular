import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {
  clickedElement: any;
  checkid: any;
  full = false;
  demo = false;
  add = false;
  addnum = 1;
  zero = true;
  constructor() {}

  ngOnInit(): void {}
  onButtonGroupClick($event: any) {
    this.clickedElement = $event.target || $event.srcElement;
    let btnAlreadyActive =
      this.clickedElement.parentElement.querySelector('.active');
    console.log('btn' + btnAlreadyActive);
    if (this.clickedElement.id == '') {
      this.checkid = 'rele';
    } else {
      this.checkid = this.clickedElement.id;
    }
    if (this.clickedElement.nodeName === 'BUTTON') {
      if (btnAlreadyActive) {
        btnAlreadyActive.classList.remove('active');
      }
      this.clickedElement.className += ' active';
    }
  }
  zerocheckadd() {
    this.zero = true
    this.addnum = 1;
    if (this.addnum == 0) {
      this.addnum = 1;
      this.zero = false;
    } else {
      this.zero = true;
    }
  }
  zerocheck() {
    if (this.addnum < 1) {
      this.zero = false;
    } else {
      this.zero = true;
    }
  }
}
