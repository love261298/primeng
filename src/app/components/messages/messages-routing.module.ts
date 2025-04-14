import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages/messages.component';
import { ToastComponent } from './toast/toast.component';

const routes: Routes = [
  { path: 'messages', component: MessagesComponent },
  { path: 'toast', component: ToastComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
