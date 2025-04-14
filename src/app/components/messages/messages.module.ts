import { NgModule } from '@angular/core';
import { ImportModule } from '../../common/import.module';
import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { ToastComponent } from './toast/toast.component';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    MessagesComponent,
    ToastComponent
  ],
  imports: [
    ImportModule,
    MessagesRoutingModule
  ],
  providers: [
    MessageService
  ]
})
export class MessagesModule { }
