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
    this.cartHandler.getItemforCart().subscribe((product: Product) => {
      this.getProductInCart(product);
    });
  }


  getProductInCart(product: Product){

    let productExists = false;

    for(let i in this.cartItems){
      if(this.cartItems[i].id === product.id){
        this.cartItems[i].quantity++
        productExists = true;
        break;
      }
    }

    if(!productExists){
      this.cartItems.push({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: 1,
        description: product.description,
        category: product.category,
        image: product.image
      })
    }

    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.quantity * item.price)
    });
  }

}
