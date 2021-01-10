import { Injectable } from '@angular/core';
import { timeStamp } from 'console';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsList: Product[] = [
    new Product(1, "Product 1", 100, "This is the description of Product 1", "Clothes", "./assets/product.png"),
    new Product(2, "Product 2", 200, "This is the description of Product 2", "Clothes", "./assets/product.png"),
    new Product(3, "Product 3", 300, "This is the description of Product 3", "Clothes", "./assets/product.png"),
    new Product(4, "Product 4", 400, "This is the description of Product 4", "Clothes", "./assets/product.png"),
    new Product(5, "Product 5", 500, "This is the description of Product 5", "Clothes", "./assets/product.png"),
    new Product(6, "Product 6", 600, "This is the description of Product 6", "Clothes", "./assets/product.png"),
  ];
  constructor() { }

  getProducts(){
    return this.productsList;
  }
}
