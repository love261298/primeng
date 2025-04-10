import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar/calendar.component';
import { FormRoutingModule } from './form-routing.module';
import { AutoComplateComponent } from './auto-complate/auto-complate.component';
import { ImportModule } from '../../common/import.module';



@NgModule({
  declarations: [
    CalendarComponent,
    AutoComplateComponent,
  ],
  imports: [
    ImportModule,
    FormRoutingModule,
  ],
})
export class FormModule { }
