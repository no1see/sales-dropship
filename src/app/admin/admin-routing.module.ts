import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { GoodsComponent } from './goods/goods.component';


const routes: Routes = [
  {
    path: '', children: [
      { path: 'login', component: LoginComponent},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'categories', component: CategoriesComponent},
      { path: 'goods', component: GoodsComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
