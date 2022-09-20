import { Component, OnInit, Output } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  constructor(private navbarService: NavbarService) {}
  docElement: HTMLElement | undefined;
  isFullScreen: boolean = false;
  userdropdownshow = false;
  menuchange = false;
  ngOnInit(): void {}
  fullscreen() {
    this.docElement = document.documentElement;
    if (!this.isFullScreen) {
      this.docElement!.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    this.isFullScreen = !this.isFullScreen;
  }
  menushowandhide() {
    this.navbarService.sendClickEvent();
  }
}
