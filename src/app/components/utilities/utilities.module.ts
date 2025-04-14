import { NgModule } from '@angular/core';
import { FilterServiceComponent } from './filter-service/filter-service.component';
import { ImportModule } from '../../common/import.module';
import { UtilitiesRoutingModule } from './utilities-routing.module';



@NgModule({
  declarations: [
    FilterServiceComponent
  ],
  imports: [
    ImportModule,
    UtilitiesRoutingModule
  ]
})
export class UtilitiesModule { }
