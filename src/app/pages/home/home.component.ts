import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    isSticky: boolean = false;


  add = false;
 clickedElement:any;
  constructor() { }

  ngOnInit(): void {
    window.addEventListener("scroll", this.checkScroll, true);
  }
  ngOnDestroy() {
    window.removeEventListener("scroll", this.checkScroll, true);
  }

  checkScroll(event:any) {
    console.log(window.pageYOffset)
         if (window.pageYOffset > 550) {
       let element = document.querySelector('.closediv');
       element?.classList.add('sticky');
     } else {
      let element = document.querySelector('.closediv');
        element?.classList.remove('sticky');
     }
  }

  // stick scroll
  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll() {
  //    console.log("hi")
    //  if (window.pageYOffset > 550) {
    //    let element = document.querySelector('.closediv');
    //    element?.classList.add('sticky');
    //  } else {
    //   let element = document.querySelector('.closediv');
    //     element?.classList.remove('sticky');
    //  }
  // }
  // end
  onButtonGroupClick($event:any){
     this.clickedElement = $event.target || $event.srcElement;
    let isCertainButtonAlreadyActive = this.clickedElement.parentElement.querySelector(".active");
    if( this.clickedElement.nodeName === "BUTTON" ) {
      if( isCertainButtonAlreadyActive) {
          isCertainButtonAlreadyActive.classList.remove("active");
      }
      this.clickedElement.className += " active";
    }

  }

}
function checkScroll() {
  throw new Error('Function not implemented.');
}

