import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-modules';
import { RouterModule } from '@angular/router';
import { MenuItems } from './side-menu/side-menu.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
  ],
  providers: [MenuItems],
})
export class SharedModule { }
