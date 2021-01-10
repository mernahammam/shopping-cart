import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartHandlerService {

  subject = new Subject();
  constructor() { }

  sendItemToCart(product){
    this.subject.next(product);
  }

  getItemforCart(){
    return this.subject.asObservable();
  }
}
