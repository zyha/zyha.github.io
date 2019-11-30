import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    public nav: NavbarService,
  ) {
    this.nav.show();
    this.nav.setDeg(180);
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
addToCart(pottery) {
    window.alert('Your ' + pottery.name +' has been added to the cart!');
    this.cartService.addToCart(pottery);
  }
removeFromCart(pottery, potteryId) {
    window.alert('Your ' + pottery.name +' has been removed from the cart!');
    this.cartService.removeFromCart(potteryId)
  }
  onSubmit(customerData){
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.cartService.clearCart();
    this.checkoutForm.reset();

  }

}
