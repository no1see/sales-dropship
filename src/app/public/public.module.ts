import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navigation/header/header.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PublicRoutingModule } from './public-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as ngCommon from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PublicComponent } from './public.component';
import { AboutComponent } from './about/about.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryFilterComponent } from './categories/category-filter/category-filter.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RelatedProductsComponent } from './related-products/related-products.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DeliveryComponent } from './delivery/delivery.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    PublicComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    ShoppingCartComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    CategoryFilterComponent,
    ProductDetailsComponent,
    RelatedProductsComponent,
    DeliveryComponent,
    FooterComponent
  ],
  imports: [
    ngCommon.CommonModule,
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    CarouselModule
  ]
})
export class PublicModule { }
