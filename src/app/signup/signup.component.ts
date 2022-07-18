import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @ViewChild('username', { static: true }) usernameElement!: ElementRef;
  userdata: string = '';
  myusername: string = '';
  ElementRef: any;

  constructor(usernameElement: ElementRef) {
    this.usernameElement = usernameElement;
  }
  car = false;
  ngOnInit(): void {}
  onFocus() {
    this.myusername = this.usernameElement.nativeElement.value;
    if (this.myusername == '') {
      this.car = true;
      console.log('on');
    }
  }
  focusOut() {
    this.myusername = this.usernameElement.nativeElement.value;
    if (this.myusername == '') {
      this.car = false;
      console.log('outoff');
    } else {
      this.car = true;
      console.log('outon');
    }
  }
}
