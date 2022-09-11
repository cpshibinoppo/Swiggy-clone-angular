import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addnewaddress',
  templateUrl: './addnewaddress.component.html',
  styleUrls: ['./addnewaddress.component.css'],
})
export class AddnewaddressComponent implements OnInit {
  addr = false;
  addrerror = false;
  door = false;
  doorerror = false;
  land = false;
  landerror = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  loginForm = this.fb.group({
    address: ['', [Validators.required, Validators.minLength(8)]],
    dooraddress: ['', [Validators.required]],
    landmark: ['', [Validators.required]],
  });
  get f() {
    return this.loginForm.controls;
  }
  onsubmit() {}
  onFocus(clike: any) {
    if (clike == 'addr') {
      if (this.f.address.value == '') {
        this.addr = true;
      }
    } else if (clike == 'door') {
      if (this.f.dooraddress.value == '') {
        this.door = true;
      }
    } else if (clike == 'land') {
      if (this.f.landmark.value == '') {
        this.land = true;
      }
    }
  }
  focusOut(clike: any) {
    if (clike == 'addr') {
      if (this.f.address.value == '') {
        this.addr = false;
        this.addrerror = true;
      }
    } else if (clike == 'door') {
      if (this.f.dooraddress.value == '') {
        this.door = false;
        this.doorerror = true;
      }
    } else if (clike == 'land') {
      if (this.f.landmark.value == '') {
        this.land = false;
        this.landerror = true;
      }
    } else {
      this.addr = false;
      this.door = false;
      this.land = false;
    }
  }
}
