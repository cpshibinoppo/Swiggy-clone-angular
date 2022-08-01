import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  ngOnInit(): void {
  }
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

}
