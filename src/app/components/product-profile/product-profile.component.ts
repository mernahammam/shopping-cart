import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-product-profile',
  templateUrl: './product-profile.component.html',
  styleUrls: ['./product-profile.component.css']
})
export class ProductProfileComponent implements OnInit {
  product: Product;
  inCart = false;
  cartItems: Product[] = [];
  constructor(
    private route : ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const routeValues = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeValues.get('productId'));
    this.cartItems = JSON.parse(localStorage.getItem("cartItems"));
    for(let i in this.cartItems){
      if(productIdFromRoute === this.cartItems[i].id){
        this.product = this.cartItems[i];
        this.inCart = true;
        break;
      } else {
        this.http.get<Product> ("https://fakestoreapi.com/products/" + productIdFromRoute).subscribe((product: Product) => {
          this.product = product;
        });
      }
    }
    console.log(this.product);
    console.log(this.product.quantity);
  }


  decreaseQuantity(product){
    for(let i in this.cartItems){
      if(this.cartItems[i].id === product.id){
        if(this.cartItems[i].quantity > 1){
          this.cartItems[i].quantity--
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
        localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
        break;
      }
    }
  }

}
