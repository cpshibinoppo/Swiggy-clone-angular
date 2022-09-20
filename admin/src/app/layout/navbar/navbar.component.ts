import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  clickEventsubscription: Subscription;
  showorhide = false;
  constructor(private navbarService: NavbarService) {
    this.clickEventsubscription = this.navbarService
      .getClickEvent()
      .subscribe(() => {
        this.showorhidefun();
      });
  }
  ngOnInit(): void {}
  showorhidefun() {
    console.log('ch');

    if (this.showorhide == true) {
      console.log('if');

      this.showorhide = false;
    } else if(this.showorhide == false) {
      console.log('else');
      this.showorhide = true;
    }
  }
}
