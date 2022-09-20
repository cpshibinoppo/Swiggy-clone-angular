import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clickEventsubscription: Subscription;
navcol = 2
topbarcol = 10
  constructor(private navbarService: NavbarService) {
    this.clickEventsubscription = this.navbarService
    .getClickEvent()
    .subscribe(() => {
      this.changecolsixe();
    });
  }

  ngOnInit(): void {
  }

 changecolsixe(){
  console.log('home');

  if(this.navcol == 2){
  this.navcol = 1
  this.topbarcol = 11
  }else if(this.navcol == 1){
    this.navcol = 2
this.topbarcol = 10
  }
}
}
