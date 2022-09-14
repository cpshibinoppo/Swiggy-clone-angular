import { Component, HostListener, OnInit } from '@angular/core';
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
  add = false;
  editshowph = false;
  editshowemail = false;
  editshowpass = false;
  sub = false;
  dele = 9400;
  email = 'cpshibinoppo@gamil.com';
  pass = 'cpshibin9400';
  numcheck = true;
  emailcheck = true;
  phonenubererror = false;
  useremailerror = false;
  userpassworderror = false;
  passwordcheck = true;
  addnum = 1;
  zero = true;
  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}
  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.usernavbartitle = data;
    });
  }
  resetdropdown(a: any) {
    var canger;
    canger = document.getElementById('sm');
    canger!.innerHTML = 'Other banks';
  }
  activefun(btnname: any) {
    document.querySelector('.active')!.classList.remove('active');
    btnname.classList.add('active');
  }
  loginForm = this.fb.group({
    phonenumber: [
      '',
      [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
    ],
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
    if (this.f.phonenumber.value == '') {
      this.numcheck = false;
      this.phonenubererror = true;
    } else {
      this.numcheck = true;
    }
  }
  onFocus(name: any) {
    this.textcard = name;
    if (name == 'num') {
      if (this.f.phonenumber.value == '') {
        this.numcheck = true;
      }
    } else if (name == 'email') {
      if (this.f.useremail.value == '') {
        this.emailcheck = true;
        this.useremailerror = true;
      }
    } else if ((name = 'password')) {
      this.passwordcheck = true;
      this.userpassworderror = true;
    }
  }
  focusOut(con: any) {
    if (con == '') {
      this.textcard = false;
    }
    if (con == 'num') {
      if (this.f.phonenumber.value == '') {
        this.numcheck = false;
      }
    } else if (con == 'email') {
      if (this.f.useremail.value == '') {
        this.emailcheck = false;
        this.useremailerror = true;
      }
    } else if ((con = 'password')) {
      this.passwordcheck = false;
      this.userpassworderror = true;
    } else {
      this.numcheck = true;
      this.emailcheck = true;
      this.passwordcheck = true;
    }
  }
  editshow(se: any) {
    if (se == 'ph') {
      this.editshowph = true;
      this.editshowemail = false;
      this.editshowpass = false;
    } else if (se == 'em') {
      this.editshowemail = true;
      this.editshowph = false;
      this.editshowpass = false;
    } else if (se == 'pa') {
      this.editshowpass = true;
      this.editshowph = false;
      this.editshowemail = false;
    }
  }
  hideedit() {
    this.editshowph = false;
    this.editshowemail = false;
    this.editshowpass = false;
  }
  subshow() {
    this.add = !this.add;
  }
  navchan = false;
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event: any) {
    var prevScrollpos = window.pageYOffset;
    console.log('pr' + prevScrollpos);
    if (prevScrollpos > 30) {
      this.navchan = true;
      console.log('show' + this.navchan);
    } else {
      this.navchan = false;
      console.log('hide' + this.navchan);
    }
  }
  editaddress = false
}
