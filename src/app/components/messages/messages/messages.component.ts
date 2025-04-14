import { Component } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  messagesBasic!: Message[];
  messages!: Message[];
  messagesDynamic!: Message[];
  messages1: Message[] | undefined;
  messages2: Message[] | undefined;
  constructor(private messageService: MessageService) { }

  addSingle() {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
  }

  addMultiple() {
    this.messageService.addAll([
      { severity: 'success', summary: 'Service Message', detail: 'Via MessageService' },
      { severity: 'info', summary: 'Info Message', detail: 'Via MessageService' }
    ]);
  }

  clear() {
    this.messageService.clear();
  }
  ngOnInit() {
    this.messages1 = [
      { severity: 'success', summary: 'Success', detail: 'Message Content' },
      { severity: 'info', summary: 'Info', detail: 'Message Content' },
    ];

    this.messages2 = [
      { severity: 'warn', summary: 'Waning', detail: 'Closable Message Content' },
      { severity: 'error', summary: 'Error', detail: 'Closable Message Content' },
    ];
    this.messagesBasic = [{ severity: 'info', detail: 'Message Content' }];
    this.messages = [
      { severity: 'info', detail: 'Info Message' },
      { severity: 'success', detail: 'Success Message' },
      { severity: 'warn', detail: 'Warning Message' },
      { severity: 'error', detail: 'Error Message' },
      { severity: 'secondary', detail: 'Secondary Message' },
      { severity: 'contrast', detail: 'Contrast Message' }
    ];
  }
  addMessages() {
    this.messagesDynamic = [
      { severity: 'info', summary: 'Dynamic Info Message' },
      { severity: 'success', summary: 'Dynamic Success Message' },
      { severity: 'warn', summary: 'Dynamic Warning Message' }
    ];
  }

  clearMessages() {
    this.messagesDynamic = [];
  }
}
