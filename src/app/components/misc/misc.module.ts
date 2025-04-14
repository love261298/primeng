import { NgModule } from '@angular/core';
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
import { ImportModule } from '../../common/import.module';
import { MiscRoutingModule } from './misc-routing.module';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProductService } from '../../services/product.service';
import { MessageService } from 'primeng/api';
import { TerminalService } from 'primeng/terminal';



@NgModule({
  declarations: [
    AvatarComponent,
    BadgeComponent,
    BlockUiComponent,
    ChipComponent,
    InPlaceComponent,
    MeterGroupComponent,
    ScrollTopComponent,
    SkeletonComponent,
    ProgressSpinnerComponent,
    TagComponent,
    TerminalComponent,
    ProgressBarComponent
  ],
  imports: [
    ImportModule,
    MiscRoutingModule
  ],
  providers: [ProductService, MessageService, TerminalService]
})
export class MiscModule { }
