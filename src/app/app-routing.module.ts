import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './module/layout/layout.component';

const routes: Routes = [
  { path: 'admin',loadChildren: () => import('./module/login/login.module').then(m => m.LoginModule),},
  { path: 'new',loadChildren: () => import('./module/register/register.module').then(m => m.RegisterModule),}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
