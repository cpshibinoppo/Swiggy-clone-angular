import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  add = false
  product: any;
  noncart = false;
  subpayment = false;
  wallets = 'wallets';
  cardnum = false;
  checkboxshow = true;
  cardimgname: any;
  textcard: any;
  nocon = true;
  pathofimg = '../../../assets/image';
  constructor(private route: ActivatedRoute, private routelink: Router) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.product = data;
    });
  }
  onFocus(name: any) {
    this.textcard = name;
  }
  focusOut(con: any) {
    if (con == '') {
      this.textcard = false;
    }
  }

  creditCardType(cc: string): string | undefined {
    let amex = new RegExp('^3[47][0-9]{5,}$');
    let visa = new RegExp('^4[0-9]{6,}$');
    let mastercard = new RegExp('^5[1-5][0-9]{14}$');
    let mastercard2 = new RegExp('^2[2-7][0-9]{14}$');
    let rupay = new RegExp(
      '^(((60)([0-9]{14}))|((6521)([0-9]{12}))|((6522)([0-9]{12})))$'
    );
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
  getCardType(number: any) {
    let result = number.replace(/\s/g, '');
    this.cardimgname = this.creditCardType(result);
  }
  dropdownshow = false;
  subdrop(bankname: any) {
    var canger;
    let currentele = bankname?.innerHTML;
    canger = document.getElementById('sm');
    canger!.innerHTML = currentele;
    this.dropdownshow = false;
    $('#SBI').prop('checked', false);
    $('#AXIS').prop('checked', false);
    $('#KOTAK').prop('checked', false);
    $('#ICICI').prop('checked', false);
    $('#HDFC').prop('checked', false);
  }
  resetdropdown(a: any) {
    var canger;
    canger = document.getElementById('sm');
    canger!.innerHTML = 'Other banks';
    this.dropdownshow = false;
  }
  activefun(btnname: any) {
    document.querySelector('.active')!.classList.remove('active');
    btnname.classList.add('active');
  }
  addnum = 1;
  zero = true;

  zerocheck() {
    if (this.addnum < 1) {
      this.routelink.navigate(['/home/restaurant']);
    }
  }
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event: any) {
    var prevScrollpos = window.pageYOffset;
    console.log('pr' + prevScrollpos);
  }
}
