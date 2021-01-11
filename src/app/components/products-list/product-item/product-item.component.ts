import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartHandlerService } from 'src/app/services/cart-handler.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  inCart = false;
  cartItems: Product[] = [];
  constructor(private cartHandler: CartHandlerService ) { }

  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem("cartItems"));
    for(let i in this.cartItems){
      if(this.cartItems[i].id === this.product.id){
        this.inCart = true;
        this.product.quantity = this.cartItems[i].quantity;
        break;
      }
    }
  }

  addProductToCart(){
    this.cartHandler.sendItemToCart(this.product);
    this.inCart = true;
  }

  decreaseQuantity(product){
    for(let i in this.cartItems){
      if(this.cartItems[i].id === product.id){
        if(this.cartItems[i].quantity > 1){
          this.cartItems[i].quantity--
          product.quantity--
        }
        localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
        break;
      }
    }
  }

  increaseQuantity(product){
    for(let i in this.cartItems){
      if(this.cartItems[i].id === product.id){
        this.cartItems[i].quantity++
        product.quantity++
        localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
        break;
      }
    }
  }

}
