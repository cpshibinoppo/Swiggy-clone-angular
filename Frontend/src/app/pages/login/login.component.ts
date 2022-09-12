import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NotloginComponent } from '../../static/notlogin/notlogin.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {}
  sub = false;
  sam = false;
  // loging
  constructor(private fb: FormBuilder, private closefn: NotloginComponent) {}
  loginForm = this.fb.group({
    phonenumber: [
      '',
      [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
    ],
    contphonenumber: [
      '',
      [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
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
  onFocus() {
    if (this.f.phonenumber.value == '') {
      this.sam = true;
    }
  }
  focusOut() {
    this.sub = true;
    if (this.f.phonenumber.value == '') {
      this.sam = false;
    } else {
      this.sam = true;
    }
  }
  close() {
    this.closefn.closeloginandsignup();
  }
}
