import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FormRoutingModule } from './form-routing.module';



@NgModule({
  declarations: [
    FormComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    FormRoutingModule
  ],
  bootstrap: [FormComponent]
})
export class FormModule { }
