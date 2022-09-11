import { Component, OnInit } from '@angular/core';
import {HomeComponent} from '../../pages/home/home.component'

@Component({
  selector: 'app-subnabhome',
  templateUrl: './subnabhome.component.html',
  styleUrls: ['./subnabhome.component.css']
})
export class SubnabhomeComponent implements OnInit {
  clickedElement: any;
  checkid: any;
  add:any

  constructor(public homecomp:HomeComponent) { }

  ngOnInit(): void {
  }
  onButtonGroupClick(btn:any){
  this.homecomp.onButtonGroupClick(btn)
 }
 openandhide(){
  this.homecomp.openandhide()
 }
}
