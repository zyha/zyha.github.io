import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  constructor() { }

  addToCart(product) {
    this.items.push(product);
  }
  removeFromCart(productIndex) {
    if (productIndex > -1) {
      this.items.splice(productIndex, 1);
    }
  }
  getItems() {
    return this.items;
  }
  notInCart(product){
    return this.items.indexOf(product)
  }
  clearCart() {
    this.items = [];
    return this.items;
  }

}
