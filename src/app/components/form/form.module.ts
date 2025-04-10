import { NgModule } from '@angular/core';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ImportModule } from '../../common/import.module';
import { FormRoutingModule } from './form-routing.module';



@NgModule({
  declarations: [
    AutoCompleteComponent,
    CalendarComponent
  ],
  imports: [
    ImportModule,
    FormRoutingModule
  ]
})
export class FormModule { }
