import { Component, OnInit } from '@angular/core';
import { offers } from '../offers';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  offers=offers;
  product:any;
  
  constructor(private cartService: CartService) { }

  addToCart(product) {

    window.alert('Item has been added to the cart!');

    this.cartService.addToCart(product);

  }
  ngOnInit(): void {
  }

}
