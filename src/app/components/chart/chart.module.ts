import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { ImportModule } from '../../common/import.module';
import { ChartRoutingModule } from './chart-routing.module';



@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    ImportModule,
    ChartRoutingModule
  ]
})
export class ChartModule { }
