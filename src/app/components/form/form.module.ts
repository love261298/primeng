import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { FormRoutingModule } from './form-routing.module';
import { AutoComplateComponent } from './auto-complate/auto-complate.component';



@NgModule({
  declarations: [
    CalendarComponent,
    AutoComplateComponent,
  ],
  imports: [
    CommonModule,
    FormRoutingModule
  ],
})
export class FormModule { }
