import { Component, OnInit } from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { FormBuilder, Validators } from '@angular/forms';
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
  phonenubererror = false;
  usernumerror = false;
  useremailerror = false;
  userpassworderror = false;
  usernumber = false;
  usernam = false;
  useremail = false;
  userpassword = false;
  sub = false;
  sam = false;
  ngOnInit(): void {}
  handleAddressChange(address: Address) {
    console.log(address.formatted_address);
    console.log(address.geometry.location.lat());
    console.log(address.geometry.location.lng());
  }
  // loging
  constructor(private fb: FormBuilder) {}
  loginForm = this.fb.group({
    phonenumber: ['',[Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
    contphonenumber: [
      '',
      [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
    ],
    username: ['', [Validators.required, Validators.minLength(3)]],
    useremail: ['', [Validators.required, Validators.email]],
    userpassword: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(10)],
    ],
  });
  get f() {
    return this.loginForm.controls;
  }
  onsubmit() {
    this.sub = true;
    if (this.f.phonenumber.value == '') {
      this.sam = false;
    } else {
      this.sam = true;
    }
  }
  onFocus(par: any) {
    if (this.f.phonenumber.value == '') {
      this.sam = true;
    }
    if (par == 'phone') {
      if (this.f.contphonenumber.value == '') {
        this.usernumber = true;
        this.phonenubererror = true;
      }
    } else if (par == 'name') {
      if (this.f.username.value == '') {
        this.usernam = true;
        this.usernumerror = true;
      }
    } else if (par == 'email') {
      if (this.f.useremail.value == '') {
        this.useremail = true;
        this.useremailerror = true;
      }
    } else if (par == 'password') {
      if (this.f.userpassword.value == '') {
        this.userpassword = true;
        this.userpassworderror = true;
      }
    }
  }
  focusOut(par: any) {
    this.sub = true;

    if (this.f.phonenumber.value == '') {
      this.sam = false;
    } else {
      this.sam = true;
    }
    if (par == 'phone') {
      if (this.f.contphonenumber.value == '') {
        this.usernumber = false;
        this.phonenubererror = true;
      }
    } else if (par == 'name') {
      if (this.f.username.value == '') {
        this.usernam = false;
        this.usernumerror = true;
      }
    } else if (par == 'email') {
      if (this.f.useremail.value == '') {
        this.useremail = false;
        this.useremailerror = true;
      }
    } else if (par == 'password') {
      if (this.f.userpassword.value == '') {
        this.userpassword = false;
        this.userpassworderror = true;
      }
    } else {
      this.usernumber = true;
      this.usernam = true;
      this.useremail = true;
      this.userpassword = true;
    }
  }
  close() {
    console.log('close');
    this.loginop = false;
    this.opened = false;
  }

}
