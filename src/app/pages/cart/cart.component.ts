import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  product: any;
  noncart = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.route.data.subscribe(data => {
        this.product=data;
    })

  }

}
