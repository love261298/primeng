import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { SplitButtonComponent } from './split-button/split-button.component';
import { SpeedDialComponent } from './speed-dial/speed-dial.component';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'split-button', component: SplitButtonComponent },
  { path: 'speed-dial', component: SpeedDialComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ButtonRoutingModule { }
