import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
})
export class OffersComponent implements OnInit {
  offershow = false;
  constructor() {}

  ngOnInit(): void {
    $('#rest').addClass('btnadd');
  }
  restfun(id: any) {
    this.offershow = false;
    if (id == 'rest') {
      $('#rest').addClass('btnadd');
      $('#paym').removeClass('btnadd');
      $('#line').removeClass('lineadd');
    } else if (id == 'paym') {
      this.offershow = true;
      $('#rest').removeClass('btnadd');
      $('#paym').addClass('btnadd');
      $('#line').addClass('lineadd');
    }
  }
}
