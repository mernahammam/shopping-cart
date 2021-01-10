import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductProfileComponent } from './components/product-profile/product-profile.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
  { path: "", component: ProductsListComponent },
  { path: "products/:productId", component: ProductProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
