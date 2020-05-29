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
import { AdminComponent } from './admin.component';
import { AdminHeaderComponent } from './navigation/admin-header/admin-header.component';
import { AdminSidebarComponent } from './navigation/admin-sidebar/admin-sidebar.component';
import { CreateOrEditCategoryGood } from './goods/create-or-edit-good/create-or-edit-good.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    CategoriesComponent,
    GoodsComponent,
    CreateOrEditCategoryComponent,
    CreateOrEditCategoryGood,
    AdminComponent,
    AdminHeaderComponent,
    AdminSidebarComponent
  ],
  imports: [
    ngCommon.CommonModule,
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  entryComponents: [
    CreateOrEditCategoryComponent,
    CreateOrEditCategoryGood
  ]
})
export class AdminModule { }
