import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  add = false;
 clickedElement:any;
  constructor() { }
  ngOnInit(): void {}
  onButtonGroupClick($event:any){
     this.clickedElement = $event.target || $event.srcElement;
    let isCertainButtonAlreadyActive = this.clickedElement.parentElement.querySelector(".active");
    if( this.clickedElement.nodeName === "BUTTON" ) {
      if( isCertainButtonAlreadyActive) {
          isCertainButtonAlreadyActive.classList.remove("active");
      }
      this.clickedElement.className += " active";
    }

  }

}
