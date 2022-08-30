import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';




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
  date: string = '';
  checkboxshow = true
  cardimgname:any
  constructor(private route: ActivatedRoute ) {}

  ngOnInit(): void {
      this.route.data.subscribe(data => {
        this.product=data;
    })
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

  creditCardType(cc: string):string|undefined {
  let amex = new RegExp('^3[47][0-9]{5,}$');
  let visa = new RegExp('^4[0-9]{6,}$');
  let mastercard = new RegExp('^5[1-5][0-9]{14}$');
  let mastercard2 = new RegExp('^2[2-7][0-9]{14}$');
  let rupay =  new RegExp('^(((60)([0-9]{14}))|((6521)([0-9]{12}))|((6522)([0-9]{12})))$');
  let rupaytest = new RegExp('^6[0-9]{6,}$');

  if (visa.test(cc)) {
    return 'Visa.png';
  }
  if (amex.test(cc)) {
    return 'Amex.png';
  }
  if (mastercard.test(cc) || mastercard2.test(cc)) {
    return 'Mastercard.png';
  }
  if (rupay.test(cc)) {
    return 'RuPayColoured.png';
  }
  if (rupaytest.test(cc)) {
    return 'RuPayColoured.png';
  }
  return undefined;
}
getCardType (number:any) {
  let result = number.replace(/\s/g,'')
  this.cardimgname = this.creditCardType(result);
}
}