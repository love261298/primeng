import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeferComponent } from './defer/defer.component';
import { FocusTrapComponent } from './focus-trap/focus-trap.component';
import { StyleClassComponent } from './style-class/style-class.component';
import { RippleComponent } from './ripple/ripple.component';
import { AutoFocusComponent } from './auto-focus/auto-focus.component';
import { AnimateOnScrollComponent } from './animate-on-scroll/animate-on-scroll.component';



const routes: Routes = [
  { path: 'defer', component: DeferComponent },
  { path: 'focus-trap', component: FocusTrapComponent },
  { path: 'style-class', component: StyleClassComponent },
  { path: 'ripple', component: RippleComponent },
  { path: 'auto-focus', component: AutoFocusComponent },
  { path: 'animate-on-scroll', component: AnimateOnScrollComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
