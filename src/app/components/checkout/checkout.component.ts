import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartHandlerService } from 'src/app/services/cart-handler.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items: Product[] = [
    // new Product(1, "Product 1", 100, 1, "This is the description of Product 1", "Clothes", "./assets/product.png"),
    // new Product(1, "Product 1", 100, 1, "This is the description of Product 1", "Clothes", "./assets/product.png"),
    // new Product(1, "Product 1", 100, 1, "This is the description of Product 1", "Clothes", "./assets/product.png"),
    // new Product(1, "Product 1", 100, 1, "This is the description of Product 1", "Clothes", "./assets/product.png"),
  ];

  submitted = false;
  checkoutTotal = 0;
  constructor(private cartHandler: CartHandlerService) { }

  ngOnInit(): void {
    this.items = JSON.parse(localStorage.getItem("cartItems"));
    this.calculateTotal();
  }

  calculateTotal() {
    this.checkoutTotal = 0;
    this.items.forEach(item => {
      this.checkoutTotal += (item.quantity * item.price)
    });
  }

  submitCheckout(){
    this.submitted = true;
  }

  removeFromCart(product) {
    this.items.splice(product, 1);
    localStorage.setItem("cartItems", JSON.stringify(this.items));
  }

}
