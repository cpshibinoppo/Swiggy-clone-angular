import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subnabhome',
  templateUrl: './subnabhome.component.html',
  styleUrls: ['./subnabhome.component.css']
})
export class SubnabhomeComponent implements OnInit {
  clickedElement: any;
  checkid: any;

  constructor() { }

  ngOnInit(): void {
  }
  onButtonGroupClick($event:any){
    this.clickedElement = $event.target || $event.srcElement;
   let isCertainButtonAlreadyActive = this.clickedElement.parentElement.querySelector(".active");
   if(this.clickedElement.id == ''){
     this.checkid = 'rele'
   }else{
     this.checkid = this.clickedElement.id
   }
   if( this.clickedElement.nodeName === "BUTTON" ) {
     if( isCertainButtonAlreadyActive) {
         isCertainButtonAlreadyActive.classList.remove("active");
     }
     this.clickedElement.className += " active";
   }

 }
}
