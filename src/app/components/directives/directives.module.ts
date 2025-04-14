import { NgModule } from '@angular/core';
import { DeferComponent } from './defer/defer.component';
import { StyleClassComponent } from './style-class/style-class.component';
import { RippleComponent } from './ripple/ripple.component';
import { AnimateOnScrollComponent } from './animate-on-scroll/animate-on-scroll.component';
import { ImportModule } from '../../common/import.module';
import { DirectivesRoutingModule } from './directives-routing.module';
import { FocusTrapComponent } from './focus-trap/focus-trap.component';
import { AutoFocusComponent } from './auto-focus/auto-focus.component';



@NgModule({
  declarations: [
    DeferComponent,
    FocusTrapComponent,
    StyleClassComponent,
    RippleComponent,
    AutoFocusComponent,
    AnimateOnScrollComponent
  ],
  imports: [
    ImportModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
