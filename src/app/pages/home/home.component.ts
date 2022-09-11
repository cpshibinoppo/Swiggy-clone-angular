import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  add = false;
  clickedElement: any;
  checkid: any;
  navchan = false;
  constructor() {}

  ngOnInit(): void {}
  onButtonGroupClick($event: any) {
    this.clickedElement = $event.target || $event.srcElement;
    let isCertainButtonAlreadyActive =
      this.clickedElement.parentElement.querySelector('.active');
    if (this.clickedElement.id == '') {
      this.checkid = 'rele';
    } else {
      this.checkid = this.clickedElement.id;
    }
    if (this.clickedElement.nodeName === 'BUTTON') {
      if (isCertainButtonAlreadyActive) {
        isCertainButtonAlreadyActive.classList.remove('active');
      }
      this.clickedElement.className += ' active';
    }
  }
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event: any) {
    var prevScrollpos = window.pageYOffset;
    // console.log('pr'+prevScrollpos);
    if (prevScrollpos > 110) {
      this.navchan = true;
      console.log('show' + this.navchan);
    } else {
      this.navchan = false;
      console.log('hide' + this.navchan);
    }
  }
  openandhide() {
    this.add = !this.add;
  }
}
