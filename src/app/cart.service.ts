import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: any = [];
  constructor() { }
  addToCart(product: any) {
    if (this.items.find((val)=>val.destination == product.destination)) {
        product.qtty++;
        product.price= product.price * product.qtty;
    } else {
      this.items.push(product)
    }
    console.log(this.items)
  }
  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
}