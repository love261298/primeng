import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ImportModule } from '../../common/import.module';
@NgModule({
  declarations: [
    LayoutComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ImportModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }