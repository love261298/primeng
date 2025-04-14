import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumdComponent } from './bread-crumd/bread-crumd.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { DockComponent } from './dock/dock.component';
import { MenuComponent } from './menu/menu.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { PanelMenuComponent } from './panel-menu/panel-menu.component';
import { StepsComponent } from './steps/steps.component';
import { TabmenuComponent } from './tabmenu/tabmenu.component';
import { TieredMenuComponent } from './tiered-menu/tiered-menu.component';
import { MegaMenuComponent } from './mega-menu/mega-menu.component';
import { ImportModule } from '../../common/import.module';
import { MenuRoutingModule } from './menu-routing.module';
import { MessageService } from 'primeng/api';
import { NodeService } from '../../services/node.service';
import { TerminalService } from 'primeng/terminal';
import { PhotoService } from '../../services/photo.service';
import { TicketService } from '../../services/ticket.service';



@NgModule({
  declarations: [
    BreadCrumdComponent,
    ContextMenuComponent,
    DockComponent,
    MenuComponent,
    MenuBarComponent,
    PanelMenuComponent,
    StepsComponent,
    TabmenuComponent,
    TieredMenuComponent,
    MegaMenuComponent
  ],
  imports: [
    ImportModule,
    MenuRoutingModule
  ],
  providers: [MessageService, PhotoService, NodeService, TerminalService, TicketService]
})
export class MenuModule { }
