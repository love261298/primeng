import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
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
    ButtonModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
