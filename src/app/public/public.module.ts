import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navigation/header/header.component';
import { SidebarComponent } from './navigation/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PublicRoutingModule } from './public-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import * as ngCommon from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PublicComponent } from './public.component';



@NgModule({
  declarations: [
    PublicComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    ngCommon.CommonModule,
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PublicModule { }
