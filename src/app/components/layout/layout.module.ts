import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [
    LayoutComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MenuModule,
    ToastModule,
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }