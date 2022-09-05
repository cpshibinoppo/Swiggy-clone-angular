import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  wallets = 'wallets';
  cardnum = false;
  checkboxshow = true;
  cardimgname: any;
  textcard: any;
  nocon = true;
usernavbartitle:any
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.usernavbartitle = data;
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
  resetdropdown(a: any) {
    var canger;
    canger = document.getElementById('sm');
    canger!.innerHTML = 'Other banks';

  }
  activefun(btnname: any) {
    document.querySelector('.active')!.classList.remove('active');
    btnname.classList.add('active');
  }
  addnum = 1;
  zero = true;

  zerocheck() {
    if (this.addnum < 1) {
    }
  }

}
