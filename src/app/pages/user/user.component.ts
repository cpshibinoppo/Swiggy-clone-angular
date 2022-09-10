import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  wallets = 'wallets';
  cardnum = false;
  checkboxshow = true;
  cardimgname: any;
  textcard: any;
  nocon = true;
  usernavbartitle: any;
  add = true;
  editshow = false;
  sub = false;
  sam = false;
  dele = 9400
  constructor(private route: ActivatedRoute,private fb: FormBuilder) {}

  ngOnInit(): void {
    this.sam = true;
    this.route.data.subscribe((data) => {
      this.usernavbartitle = data;
    });
  }
  // onFocus(name: any) {
  //   this.textcard = name;
  // }
  // focusOut(con: any) {
  //   if (con == '') {
  //     this.textcard = false;
  //   }
  // }
  resetdropdown(a: any) {
    var canger;
    canger = document.getElementById('sm');
    canger!.innerHTML = 'Other banks';
  }
  activefun(btnname: any) {
    document.querySelector('.active')!.classList.remove('active');
    btnname.classList.add('active');
  }
  addnum = 1;
  zero = true;
  loginForm = this.fb.group({
    phonenumber: [
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
  onFocus(name: any) {
    this.textcard = name;
    if (this.f.phonenumber.value == '') {
      this.sam = true;
    }
  }
  focusOut(con: any) {
    console.log(con.value);

    if (con == '') {
      this.textcard = false;
    }
    this.sub = true;
    if (this.f.phonenumber.value == '') {
      this.sam = false;
    } else {
      this.sam = true;
    }
  }
  // close(){
  //   this.closefn.closeloginandsignup();
  // }
}
