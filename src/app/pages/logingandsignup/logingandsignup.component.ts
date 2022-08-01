import { Component, OnInit } from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
type PaneType = 'left' | 'right';

@Component({
  selector: 'app-logingandsignup',
  templateUrl: './logingandsignup.component.html',
  styleUrls: ['./logingandsignup.component.css']
})
export class LogingandsignupComponent implements OnInit {

  ElementRef: any;
  title = 'Swiggy';
  options: any = { componentRestrictions: { country: 'IN' } };
  opened = false;
  loginop = false;
  ngOnInit(): void {}
  handleAddressChange(address: Address) {
    console.log(address.formatted_address);
    console.log(address.geometry.location.lat());
    console.log(address.geometry.location.lng());
  }
}
