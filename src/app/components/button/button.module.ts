import { NgModule } from '@angular/core';
import { ImportModule } from '../../common/import.module';
import { ButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    ButtonRoutingModule,
    ImportModule
  ]
})
export class ButtonModule { }
