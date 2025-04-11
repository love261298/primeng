import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataViewComponent } from './data-view/data-view.component';
import { TreeTableComponent } from './tree-table/tree-table.component';
import { TreeComponent } from './tree/tree.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { TableComponent } from './table/table.component';
import { ScrollerComponent } from './scroller/scroller.component';
import { PickListComponent } from './pick-list/pick-list.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  { path: 'data-view', component: DataViewComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'org-chart', component: OrgChartComponent },
  { path: 'paginator', component: PaginatorComponent },
  { path: 'pick-list', component: PickListComponent },
  { path: 'scroller', component: ScrollerComponent },
  { path: 'table', component: TableComponent },
  { path: 'time-line', component: TimeLineComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'tree-table', component: TreeTableComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class DataRoutingModule { }
