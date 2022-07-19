import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  @ViewChild('username', { static: true }) usernameElement!: ElementRef;
  @ViewChild('userphonenumberid', { static: true })
  userphonenumberid!: ElementRef;
  userdata: string = '';
  usernumervalue: string = '';
  myusername: string = '';
  myusernumber: string = '';
  ElementRef: any;
  car = false;
  carr = false;

  ngOnInit(): void {}
  onFocus(one: any) {
    console.log(one);
    this.myusername = this.usernameElement.nativeElement.value;
    this.myusernumber = this.userphonenumberid.nativeElement.value;
    if (one == 'one') {
      if (this.myusernumber == '') {
        this.car = true;
        console.log('on');
      }
    } else if (one == 'two') {
      if (this.myusername == '') {
        this.carr = true;
      }
    }
  }
  focusOut(one: any) {
    this.myusername = this.usernameElement.nativeElement.value;
    this.myusernumber = this.userphonenumberid.nativeElement.value;
    if (one == 'one') {
      if (this.myusernumber == '') {
        this.car = false;
        console.log('on');
      }
    } else if (one == 'two') {
      if (this.myusername == '') {
        this.carr = false;
      }
    } else {
      this.car = true;
      this.carr = true;
      console.log('outon');
    }
  }
}
