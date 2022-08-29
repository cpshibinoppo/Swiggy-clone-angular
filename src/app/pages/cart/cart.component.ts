import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import  Cleave from "cleave.js";



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product: any;
  noncart = false;
  subpayment = false
  clickedElement:any;
  checkid:any
  wallets= true
  cardnum = false;
  cleave: any;
  cleaveDate: any;
  date: string = '';
  checkboxshow = true

  constructor(private route: ActivatedRoute ) {
   }

  ngOnInit(): void {
      this.route.data.subscribe(data => {
        this.product=data;
    })
  //   this.cleaveDate = new Cleave('.input-date', {
  //     date: true,
  //     delimiter: '-',
  //     datePattern: ['Y', 'm', 'd']
  //  });

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
 onFocus(name:any){
  if(name == 'cardnum'){
    this.cardnum = true
  }
 }
 focusOut(name:any){
  this.cardnum = false
 }

}
