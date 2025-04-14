import { NgModule } from '@angular/core';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { ImportModule } from '../../common/import.module';
import { DragDropRoutingModule } from './drag-drop-routing.module';
import { ProductService } from '../../services/product.service';



@NgModule({
  declarations: [
    DragDropComponent
  ],
  imports: [
    DragDropRoutingModule,
    ImportModule
  ],
  providers: [ProductService]
})
export class DragDropModule { }
