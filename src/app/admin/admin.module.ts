import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ngCommon from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { GoodsComponent } from './goods/goods.component';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { CreateOrEditCategoryComponent } from './categories/create-or-edit-category/create-or-edit-category.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    CategoriesComponent,
    GoodsComponent,
    CreateOrEditCategoryComponent
  ],
  imports: [
    ngCommon.CommonModule,
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  entryComponents: [
    CreateOrEditCategoryComponent
  ]
})
export class AdminModule { }
