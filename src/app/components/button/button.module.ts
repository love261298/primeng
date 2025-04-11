import { NgModule } from '@angular/core';
import { ImportModule } from '../../common/import.module';
import { ButtonRoutingModule } from './button-routing.module';
import { ButtonComponent } from './button/button.component';
import { SplitButtonComponent } from './split-button/split-button.component';
import { MessageService } from 'primeng/api';
import { SpeedDialComponent } from './speed-dial/speed-dial.component';

@NgModule({
  declarations: [
    ButtonComponent,
    SplitButtonComponent,
    SpeedDialComponent
  ],
  imports: [
    ButtonRoutingModule,
    ImportModule
  ],
  providers: [MessageService]
})
export class ButtonModule { }
