import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  { path: 'accordion', component: AccordionComponent },
  { path: 'card', component: CardComponent },
  { path: 'divider', component: DividerComponent },
  { path: 'fieldset', component: FieldsetComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'splitter', component: SplitterComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'scroll-panel', component: ScrollPanelComponent },
  { path: 'tab-view', component: TabViewComponent },
  { path: 'toolbar', component: ToolBarComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class PanelRoutingModule { }
