import { NgModule } from '@angular/core';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: DragDropComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DragDropRoutingModule { }
