import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material-modules';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    LoginModule,
    RegisterModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule
  ]
})
export class ModuleModule { }
