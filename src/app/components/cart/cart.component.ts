import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartHandlerService } from 'src/app/services/cart-handler.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Product[] = [
    // new Product(1, "Product 1", 100, 1, "This is the description of Product 1", "Clothes", "./assets/product.png"),
    // new Product(1, "Product 1", 100, 1, "This is the description of Product 1", "Clothes", "./assets/product.png"),
    // new Product(1, "Product 1", 100, 1, "This is the description of Product 1", "Clothes", "./assets/product.png"),
    // new Product(1, "Product 1", 100, 1, "This is the description of Product 1", "Clothes", "./assets/product.png"),
  ];
  cartTotal = 0;

  constructor(
    private cartHandler: CartHandlerService
    ) { }

  ngOnInit(): void {
    // this.cartHandler.getItemforCart().subscribe((product: Product) => {
    //   this.getProductInCart(product);
    // });
    if(localStorage.getItem("cartItems") === null){
      localStorage.setItem("cartItems", "[{}]");
    } else {
      //console.log(localStorage.getItem("cartItems").length);
      this.cartItems = JSON.parse(localStorage.getItem("cartItems"));
      this.cartTotal = 0;
      this.cartItems.forEach(item => {
        this.cartTotal += (item.quantity * item.price)
      });
    }
  }

}
