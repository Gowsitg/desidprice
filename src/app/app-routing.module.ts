import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'admin',loadChildren: () => import('./module/login/login.module').then(m => m.LoginModule),},
  { path: 'new',loadChildren: () => import('./module/register/register.module').then(m => m.RegisterModule),}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
