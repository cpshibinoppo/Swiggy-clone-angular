import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  iconchang = false

  constructor() { }

  ngOnInit(): void {
  }
  iconchangfn(con:any){
    if(con.value == ""){
     this.iconchang = false
    }else{
     this.iconchang = true
    }
  }
  clearinptdata(con:any){
    con.value = ''
    this.iconchang = false
  }
}
