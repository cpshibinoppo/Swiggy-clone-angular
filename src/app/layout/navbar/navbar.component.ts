import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() public cartName: string | undefined;
  @Input() public usernavtitle: string | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log('add' + this.usernavtitle);
  }
}
