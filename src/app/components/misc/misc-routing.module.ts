import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvatarComponent } from './avatar/avatar.component';
import { BadgeComponent } from './badge/badge.component';
import { BlockUiComponent } from './block-ui/block-ui.component';
import { ChipComponent } from './chip/chip.component';
import { InPlaceComponent } from './in-place/in-place.component';
import { MeterGroupComponent } from './meter-group/meter-group.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { TagComponent } from './tag/tag.component';
import { TerminalComponent } from './terminal/terminal.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';



const routes: Routes = [
  { path: 'avarta', component: AvatarComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'block-ui', component: BlockUiComponent },
  { path: 'chip', component: ChipComponent },
  { path: 'in-place', component: InPlaceComponent },
  { path: 'meter-group', component: MeterGroupComponent },
  { path: 'scroll-top', component: ScrollTopComponent },
  { path: 'skeleton', component: SkeletonComponent },
  { path: 'progress-bar', component: ProgressBarComponent },
  { path: 'progress-spinner', component: ProgressSpinnerComponent },
  { path: 'tag', component: TagComponent },
  { path: 'terminal', component: TerminalComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MiscRoutingModule { }
