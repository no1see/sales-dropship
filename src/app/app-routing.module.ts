import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/error-pages/not-found/not-found.component';
import { HomeComponent } from './public/home/home.component';
import { ProductsComponent } from './public/products/products.component';
import { PublicComponent } from './public/public.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule), // Lazy load admin module
    data: { preload: true },
    component: PublicComponent
  },
  { path: '404', component: NotFoundComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), // Lazy load admin module
    data: { preload: true },
    component: AdminComponent
  },
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
