import { NgModule } from '@angular/core';
import { ImportModule } from '../../common/import.module';
import { PanelRoutingModule } from './panel-routing.module';
import { AccordionComponent } from './accordion/accordion.component';
import { CardComponent } from './card/card.component';
import { DividerComponent } from './divider/divider.component';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { PanelComponent } from './panel/panel.component';
import { SplitterComponent } from './splitter/splitter.component';
import { StepperComponent } from './stepper/stepper.component';
import { ScrollPanelComponent } from './scroll-panel/scroll-panel.component';
import { TabViewComponent } from './tab-view/tab-view.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MenuModule } from 'primeng/menu';



@NgModule({
  declarations: [
    AccordionComponent,
    CardComponent,
    DividerComponent,
    FieldsetComponent,
    PanelComponent,
    SplitterComponent,
    StepperComponent,
    ScrollPanelComponent,
    TabViewComponent,
    ToolBarComponent
  ],
  imports: [
    ImportModule,
    PanelRoutingModule,
    MenuModule
  ]
})
export class PanelModule { }
