import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartHandlerService {

  subject = new Subject();
  cartItems : Product[] = [];
  constructor() { }

  sendItemToCart(product){
    //this.subject.next(product);
    product.quantity = 1;
    this.cartItems = JSON.parse(localStorage.getItem("cartItems"));
    this.cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
  }

  // getItemforCart(){
  //   return this.subject.asObservable();
  // }

  getCartItems() {
    return this.cartItems;
  }

  decreaseItemToCart(product){
    this.subject.next(product);
  }

  increaseItemToCart(product){
    this.subject.next(product);
  }

  decreaseItemForCart(){
    return this.subject.asObservable();
  }

  increaseItemForCart(){
    return this.subject.asObservable();
  }
}
