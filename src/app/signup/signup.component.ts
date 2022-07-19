import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  @ViewChild('username', { static: true }) usernameElement!: ElementRef;
  @ViewChild('userphonenumberid', { static: true })userphonenumberid!: ElementRef;
  @ViewChild('useremailid', { static: true })useremailid!: ElementRef;
  @ViewChild('userepassword', { static: true })userepasswordid!: ElementRef;

  userdata: string = '';
  usernumervalue: string = '';
  useremailvalue: string = '';
  userpassvalue: string = '';
  myusername: string = '';
  myusernumber: string = '';
  myuseremail:string = '';
  myuserpassword:string = '';
  ElementRef: any;
  num = false;
  nameuser = false;
  emailuser = false;
  passworduser = false;
  ngOnInit(): void {}
  onFocus(one: any) {
    console.log(one);
    this.myusername = this.usernameElement.nativeElement.value;
    this.myusernumber = this.userphonenumberid.nativeElement.value;
    this.myuseremail = this.useremailid.nativeElement.value;
    this.myuserpassword = this.userepasswordid.nativeElement.value;

    if (one == 'one') {
      if (this.myusernumber == '') {
        this.num = true;
        console.log('on');
      }
    } else if (one == 'two') {
      if (this.myusername == '') {
        this.nameuser = true;
      }
    } else if(one == 'three'){
      if (this.myuseremail == '') {
        this.emailuser = true;
      }
    } else if(one == 'four'){
      if (this.myuserpassword == '') {
        this.passworduser = true;
      }
    }
  }
  focusOut(one: any) {
    this.myusername = this.usernameElement.nativeElement.value;
    this.myusernumber = this.userphonenumberid.nativeElement.value;
    this.myuseremail = this.useremailid.nativeElement.value;
    this.myuserpassword = this.userepasswordid.nativeElement.value;
    if (one == 'one') {
      if (this.myusernumber == '') {
        this.num = false;
        console.log('on');
      }
    } else if (one == 'two') {
      if (this.myusername == '') {
        this.nameuser = false;
      }
    } else if (one == 'three') {
      if (this.myusername == '') {
        this.emailuser = false;
      }
    }else if (one == 'four') {
      if (this.myuserpassword == '') {
        this.passworduser = false;
      }
    }else {
      this.num = true;
      this.nameuser = true;
      this.emailuser = true;
      this.passworduser = true;
      console.log('outon');
    }
  }
}
