import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { MaterialModule } from 'src/app/material-modules';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule,
  ]
})
export class LoginModule { }
