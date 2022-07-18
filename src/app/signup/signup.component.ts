import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  @ViewChild('username', { static: true }) usernameElement!: ElementRef;
  userdata: string = '';
  myusername: string = '';
  ElementRef: any;
  car = false;
  carr = false;

  ngOnInit(): void {
    console.log(this.usernameElement.nativeElement.name);
  }
  onFocus(one: any) {
    console.log(one);
    this.myusername = this.usernameElement.nativeElement.value;
    if (one == 'one') {
      if (this.myusername == '') {
        this.car = true;
        console.log('on');
      }
    }else if(one == 'two'){
      this.carr = true;
    }
  }
  focusOut() {
    this.myusername = this.usernameElement.nativeElement.value;
    if (this.myusername == '') {
      this.car = false;
      this.carr = false;
      console.log('outoff');
    } else {
      this.car = true;
      this.carr = true;
      console.log('outon');
    }
  }
}
