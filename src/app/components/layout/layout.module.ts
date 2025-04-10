import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ImportModule } from '../../common/import.module';
import { LayoutRoutingModule } from './layout-routing.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    ImportModule,
    LayoutRoutingModule
  ],
  bootstrap: [LayoutComponent]
})
export class LayoutModule { }
