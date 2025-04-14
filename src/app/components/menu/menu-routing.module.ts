import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreadCrumdComponent } from './bread-crumd/bread-crumd.component';
import { TieredMenuComponent } from './tiered-menu/tiered-menu.component';
import { TabmenuComponent } from './tabmenu/tabmenu.component';
import { StepsComponent } from './steps/steps.component';
import { PanelMenuComponent } from './panel-menu/panel-menu.component';
import { MegaMenuComponent } from './mega-menu/mega-menu.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuComponent } from './menu/menu.component';
import { DockComponent } from './dock/dock.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';


const routes: Routes = [
  { path: 'bread-crumd', component: BreadCrumdComponent },
  { path: 'context-menu', component: ContextMenuComponent },
  { path: 'dock', component: DockComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu-bar', component: MenuBarComponent },
  { path: 'mega-menu', component: MegaMenuComponent },
  { path: 'panel-menu', component: PanelMenuComponent },
  { path: 'steps', component: StepsComponent },
  { path: 'tab-menu', component: TabmenuComponent },
  { path: 'tiered-menu', component: TieredMenuComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
