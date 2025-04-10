import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { ImportModule } from '../../common/import.module';
import { FormModule } from '../form/form.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    ImportModule,
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
