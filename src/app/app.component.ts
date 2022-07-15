import { Component } from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
type PaneType = 'left' | 'right';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private app = document.getElementById("sampleid");

  title = 'Swiggy';
  options: any = {
    componentRestrictions: { country: 'IN' },
  };
  opened = false;
  handleAddressChange(address: Address) {
    console.log(address.formatted_address);
    console.log(address.geometry.location.lat());
    console.log(address.geometry.location.lng());
  }
  getsignuppage() {
    console.log('Get signup page');

      console.log(this.app);
     console.log("color");
  }
}
