import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { AutoComplateComponent } from './auto-complate/auto-complate.component';

const routes: Routes = [
  { path: 'auto-complete', component: AutoComplateComponent },
  { path: 'calendar', component: CalendarComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FormRoutingModule { }
