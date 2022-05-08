import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:any;
  checkoutForm;
  constructor(private cartService: CartService, private  formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
      emailAddress:''});}
   printItems(){
          let cartElement = document.getElementById('cart-container');
          for(let val of this.items){
            cartElement.innerHTML += `
            <tr>
            <td>${val.destination}</td>
            <td>${val.qtty}</td>
            <td>${val.price} €</td>
          </tr> `}}
  totalPrice(){
    let sum:any= 0;
    for (let i = 0; i < this.items.length; i++) {
      sum = sum + Number(this.items[i].price);
     (document.getElementById('total') as HTMLElement).innerHTML=" "+ sum + "€";}}

     clearCart(){
       this.cartService.items=[];
      // this.items = [];
      document.getElementById('cart-container').innerHTML = " ";
      document.getElementById('total').innerHTML = "0.00€"
      console.log(this.items)
     }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.printItems();
    this.totalPrice();
  }
  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    alert("Thank you, your message has been sent")
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
}

