import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
sub:any
  product: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route
      .data
      .subscribe(v => console.log(v));
      this.route.data.subscribe(data => {
        this.product=data;
    })
      console.log(this.product.con);

  }

}
