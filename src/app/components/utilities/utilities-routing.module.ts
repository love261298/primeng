import { NgModule } from '@angular/core';
import { FilterServiceComponent } from './filter-service/filter-service.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', component: FilterServiceComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
