import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
  clickedElement:any;
  checkid:any
  full = false
  demo = false

  constructor() { }

  ngOnInit(): void {
  }
  scrollToElement(targetname:any,$event:any): void {
    $event.currentTarget.style.color = 'red';
    // console.log($event.currentTarget);
    targetname.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
  onButtonGroupClick($event:any){
    this.clickedElement = $event.target || $event.srcElement;
   let btnAlreadyActive = this.clickedElement.parentElement.querySelector(".active");
   console.log("btn"+btnAlreadyActive)
   if(this.clickedElement.id == ''){
     this.checkid = 'rele'
   }else{
     this.checkid = this.clickedElement.id
   }
   if( this.clickedElement.nodeName === "BUTTON" ) {
     if(btnAlreadyActive) {
      btnAlreadyActive.classList.remove("active");
     }
     this.clickedElement.className += " active";
   }

 }
 };
