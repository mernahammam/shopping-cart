import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Product[] = [
    new Product(1, "Product 1", 100, 1, "This is the description of Product 1", "Clothes", "./assets/product.png"),
    new Product(1, "Product 1", 100, 1, "This is the description of Product 1", "Clothes", "./assets/product.png"),
    new Product(1, "Product 1", 100, 1, "This is the description of Product 1", "Clothes", "./assets/product.png"),
    new Product(1, "Product 1", 100, 1, "This is the description of Product 1", "Clothes", "./assets/product.png"),
  ];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

}
