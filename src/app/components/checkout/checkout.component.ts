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

  decreaseQuantity(product){
    for(let i in this.items){
      if(this.items[i].id === product.id){
        if(this.items[i].quantity > 1){
          this.items[i].quantity--
        }
        localStorage.setItem("cartItems", JSON.stringify(this.items));
        this.calculateTotal();
        break;
      }
    }
  }

  increaseQuantity(product){
    for(let i in this.items){
      if(this.items[i].id === product.id){
        this.items[i].quantity++
        localStorage.setItem("cartItems", JSON.stringify(this.items));
        this.calculateTotal();
        break;
      }
    }
  }


  removeFromCart(product) {
    this.items.splice(product, 1);
    localStorage.setItem("cartItems", JSON.stringify(this.items));
    this.calculateTotal();
  }

}
