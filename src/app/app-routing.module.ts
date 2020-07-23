import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsProductComponent } from './product/details-product/details-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product/product-list/product-list.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'productos', component: ProductListComponent},
  {path:'productos/:id', component: DetailsProductComponent},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
