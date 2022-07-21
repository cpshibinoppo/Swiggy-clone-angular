import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder) {}
  sub = false;
  sam = false;
  loginForm = this.fb.group({
    phonenumber: [
      '',
      [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
    ]
  });
  get f() {
    return this.loginForm.controls;
  }
  onsubmit(par: any) {
    this.sub = true;
      if (this.f.phonenumber.value == '') {
        this.sam = false;
      }
    else {
      this.sam = true;
    }
  }
  onFocus(par: any) {
    if (this.f.phonenumber.value == '') {
      this.sam = true;
    }
  }
  focusOut(par: any) {
    this.sub = true;

    if (this.f.phonenumber.value == '') {
      this.sam = false;
    } else {
      this.sam = true;
    }
  }
}
