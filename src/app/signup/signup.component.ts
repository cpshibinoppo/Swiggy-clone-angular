import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  // constructor(private fb: FormBuilder) {}
  // signupform = this.fb.group({
  //   firstnum: ['',Validators.required],
  //   firstname: [''],
  //   firstemail: [''],
  //   firstpass: ['']
  // });
  // submit = false;
  // get f(){
  //   return this.signupform.controls;
  // }
  // onsubmit(){
  //   this.submit = true;
  //   console.log("submitsu");
  // }
  @ViewChild('username', { static: true }) usernameElement!: ElementRef;
  @ViewChild('userphonenumberid', { static: true })userphonenumberid!: ElementRef;
  @ViewChild('useremailid', { static: true }) useremailid!: ElementRef;
  @ViewChild('userepassword', { static: true }) userepasswordid!: ElementRef;

  userdata: string = '';
  usernumervalue: string = '';
  useremailvalue: string = '';
  userpassvalue: string = '';
  myusername: string = '';
  myusernumber: string = '';
  myuseremail: string = '';
  myuserpassword: string = '';
  ElementRef: any;
  num = false;
  nameuser = false;
  emailuser = false;
  passworduser = false;
  ngOnInit(): void {}
  onFocus(par: any) {
    this.myusername = this.usernameElement.nativeElement.value;
    this.myusernumber = this.userphonenumberid.nativeElement.value;
    this.myuseremail = this.useremailid.nativeElement.value;
    this.myuserpassword = this.userepasswordid.nativeElement.value;

    if (par == 'phone') {
      if (this.myusernumber == '') {
        this.num = true;
      }
    } else if (par == 'name') {
      if (this.myusername == '') {
        this.nameuser = true;
      }
    } else if (par == 'email') {
      if (this.myuseremail == '') {
        this.emailuser = true;
      }
    } else if (par == 'password') {
      if (this.myuserpassword == '') {
        this.passworduser = true;
      }
    }
  }
  focusOut(par: any) {
    this.myusername = this.usernameElement.nativeElement.value;
    this.myusernumber = this.userphonenumberid.nativeElement.value;
    this.myuseremail = this.useremailid.nativeElement.value;
    this.myuserpassword = this.userepasswordid.nativeElement.value;
    if (par == 'phone') {
      if (this.myusernumber == '') {
        this.num = false;
      }
    } else if (par == 'name') {
      if (this.myusername == '') {
        this.nameuser = false;
      }
    } else if (par == 'email') {
      if (this.myuseremail == '') {
        this.emailuser = false;
      }
    } else if (par == 'password') {
      if (this.myuserpassword == '') {
        this.passworduser = false;
      }
    } else {
      this.num = true;
      this.nameuser = true;
      this.emailuser = true;
      this.passworduser = true;
    }
  }
}
