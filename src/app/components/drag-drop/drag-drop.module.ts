import { NgModule } from '@angular/core';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ImportModule } from '../../common/import.module';
import { DragDropRoutingModule } from './drag-drop-routing.module';



@NgModule({
  declarations: [
    DragDropComponent
  ],
  imports: [
    DragDropRoutingModule,
    ImportModule
  ]
})
export class DragDropModule { }
