import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../../pages/user/user.component';
@Component({
  selector: 'app-userssubnav',
  templateUrl: './userssubnav.component.html',
  styleUrls: ['./userssubnav.component.css'],
})
export class UserssubnavComponent implements OnInit {
  add: any;
  constructor(private usercompon: UserComponent) {}

  ngOnInit(): void {}
  subshow() {
    this.usercompon.subshow();
  }
}
