import {  Component } from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { animate, state, style, transition, trigger } from '@angular/animations';

type PaneType = 'left' | 'right';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('panelInOut', [
      state('right', style({ transform: 'translateX(-50%)' })),
      transition('* => *', animate(300))
    ])
]

})
export class AppComponent {
  title = 'Swiggy';
  showDiv:boolean = false;
  options: any = {
    componentRestrictions: { country: 'IN' }
  }

  handleAddressChange(address: Address) {
    console.log(address.formatted_address)
    console.log(address.geometry.location.lat())
    console.log(address.geometry.location.lng())
  }
  getsignuppage(){
    console.log("Get signup page");
  }
  slidePanel(){
    this.showDiv =! this.showDiv;
  }
}
