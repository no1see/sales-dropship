import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: HomeComponent},
      { path: 'products', component: ProductsComponent },
      { path: 'categories', component: CategoriesComponent, children:
        [
          {
            path: ':category', component: CategoryDetailComponent
          }
        ]
      },
      {
        path: 'products/:id', component: ProductDetailsComponent
      },
      // { path: 'categories/:category', component: CategoryDetailComponent },
      { path: 'about', component: AboutComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
