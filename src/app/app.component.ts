import { Component, ElementRef, ViewChild } from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
type PaneType = 'left' | 'right';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ElementRef: any;
  title = 'Swiggy';
  options: any = { componentRestrictions: { country: 'IN' } };
  opened = false;
  loginop = false;
  handleAddressChange(address: Address) {
    console.log(address.formatted_address);
    console.log(address.geometry.location.lat());
    console.log(address.geometry.location.lng());
  }
}
