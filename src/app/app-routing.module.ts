import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './module/layout/layout.component';

const routes: Routes = [
  { path: 'admin',loadChildren: () => import('./module/login/login.module').then(m => m.LoginModule),},
  { path: 'new',loadChildren: () => import('./module/register/register.module').then(m => m.RegisterModule),},
  { path: 'dashboard',component: LayoutComponent, loadChildren: () => import('./module/dashboard/dashboard.module').then(m => m.DashboardModule),}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
