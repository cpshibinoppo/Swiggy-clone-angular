import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartComponent } from '../../pages/cart/cart.component';

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
  clickedElement: any;
  checkid: any;
  constructor(private fb: FormBuilder, private cartcomp: CartComponent) {}

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
  onButtonGroupClick($event: any) {
    console.log('btncliked');

    this.clickedElement = $event.target || $event.srcElement;
    let isCertainButtonAlreadyActive =
      this.clickedElement.parentElement.querySelector('.active');
    if (this.clickedElement.id == '') {
      this.checkid = 'rele';
    } else {
      this.checkid = this.clickedElement.id;
    }
    if (this.clickedElement.nodeName === 'BUTTON') {
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove('active');
      }
      this.clickedElement.className += ' active';
    }
  }
  hide() {
    this.cartcomp.add = !this.cartcomp.add;
  }
}
