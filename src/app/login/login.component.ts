import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  sub = false;
  sam = false;
  pass = false;
  loginForm = this.fb.group({
    phonenumber: [
      '',
      [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
    ],
    password: [''],
  });
  get f() {
    return this.loginForm.controls;
  }
  onsubmit(par :any) {
    this.sub = true;
    if (par == 'one') {
      if (this.f.phonenumber.value == '') {
        this.sam = false;
      }
    } else if (par == 'two') {
      if (this.f.password.value == '') {
        this.pass = false;
      }
    } else {
      this.sam = true;
      this.pass = true;

    }
  }
  onFocus(par: any) {
    console.log(this.f.phonenumber.value);
    if (par == 'one') {
      if (this.f.phonenumber.value == '') {
        this.sam = true;
      }
    } else if (par == 'two') {
      if (this.f.password.value == '') {
        this.pass = true;
      }
    }
  }
  focusOut(par: any) {
    this.sub = true;
    if (par == 'one') {
      if (this.f.phonenumber.value == '') {
        this.sam = false;
      }
    } else if (par == 'two') {
      if (this.f.password.value == '') {
        this.pass = false;
      }
    } else {
      this.sam = true;
      this.pass = true;
    }
  }
  ngOnInit(): void {}
}
