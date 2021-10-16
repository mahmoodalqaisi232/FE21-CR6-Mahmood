import { Component, OnInit } from '@angular/core';
import { offers } from '../offers';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-offers-details',
  templateUrl: './offers-details.component.html',
  styleUrls: ['./offers-details.component.css']
})
export class OffersDetailsComponent implements OnInit {
   product:any;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(product) {

    window.alert('Your product has been added to the cart!');

    this.cartService.addToCart(product);

  }
  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
      let id : any = params.get('offersID');
      this.product = offers[id];
  
    });
  }

}
