import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { ProductProfileComponent } from './components/product-profile/product-profile.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
  { path: "", component: ProductsListComponent },
  { path: "products/:productId", component: ProductProfileComponent},
  { path: "complete-order", component: OrderFormComponent },
  { path: "checkout", component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
