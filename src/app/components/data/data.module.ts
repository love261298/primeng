import { NgModule } from '@angular/core';
import { ImportModule } from '../../common/import.module';
import { DataRoutingModule } from './data-routing.module';
import { DataViewComponent } from './data-view/data-view.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { PickListComponent } from './pick-list/pick-list.component';
import { ScrollerComponent } from './scroller/scroller.component';
import { TableComponent } from './table/table.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { TreeComponent } from './tree/tree.component';
import { TreeTableComponent } from './tree-table/tree-table.component';
import { ProductService } from '../../services/product.service';
import { CustomerService } from '../../services/customer.service';
import { MessageService } from 'primeng/api';
import { CarService } from '../../services/car.service';
import { NodeService } from '../../services/node.service';



@NgModule({
  declarations: [
    DataViewComponent,
    OrderListComponent,
    OrgChartComponent,
    PaginatorComponent,
    PickListComponent,
    ScrollerComponent,
    TableComponent,
    TimeLineComponent,
    TreeComponent,
    TreeTableComponent
  ],
  imports: [
    DataRoutingModule,
    ImportModule
  ],
  providers: [
    ProductService,
    CustomerService,
    MessageService,
    CarService,
    NodeService
  ]
})
export class DataModule { }
