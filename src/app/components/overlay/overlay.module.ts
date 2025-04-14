import { NgModule } from '@angular/core';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ConfirmPopupComponent } from './confirm-popup/confirm-popup.component';
import { DialogComponent } from './dialog/dialog.component';
import { DynamicDialogComponent } from './dynamic-dialog/dynamic-dialog.component';
import { OverlayPanelComponent } from './overlay-panel/overlay-panel.component';
import { SiderBarComponent } from './sider-bar/sider-bar.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ImportModule } from '../../common/import.module';
import { OverlayRoutingModule } from './overlay-routing.module';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ProductService } from '../../services/product.service';



@NgModule({
  declarations: [
    ConfirmDialogComponent,
    ConfirmPopupComponent,
    DialogComponent,
    DynamicDialogComponent,
    OverlayPanelComponent,
    SiderBarComponent,
    TooltipComponent
  ],
  imports: [
    ImportModule,
    OverlayRoutingModule
  ],
  providers: [
    ConfirmationService, MessageService, DialogService, ProductService,
  ]
})
export class OverlayModule { }
