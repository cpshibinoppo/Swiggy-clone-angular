import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  constructor() {}
  docElement: HTMLElement | undefined;
  isFullScreen: boolean = false;
  userdropdownshow = false
  menuchange = false
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
}
