import { Component, ElementRef, ViewChild } from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
type PaneType = 'left' | 'right';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('username', { static: true }) usernameElement!: ElementRef;
  @ViewChild('usernamee', { static: true }) usernameElementt!: ElementRef;
  myusername: string = '';
  ElementRef: any;
  constructor(usernameElement: ElementRef) {
    this.usernameElement = usernameElement;
  }
  title = 'Swiggy';
  options: any = { componentRestrictions: { country: 'IN' } };
  opened = false;
  toggle = false;
  status = 'Enable';
  userdata: string = '';
  handleAddressChange(address: Address) {
    console.log(address.formatted_address);
    console.log(address.geometry.location.lat());
    console.log(address.geometry.location.lng());
  }
  enableDisableRule() {
    this.myusername = this.usernameElement.nativeElement.value;
    if (this.myusername == '') {
       this.toggle = !this.toggle;
      this.status = this.toggle ? 'Enable' : 'Disable';

      console.log(this.status);
    } else {
      console.log('sueess');
    }
  }


}
