export class Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;

  constructor(id, title, price: 0, description: '', category: '', image: "./assets/product.png"){
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
  }
}
