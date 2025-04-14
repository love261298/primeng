import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { TicketService } from '../../../services/ticket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss'
})
export class StepsComponent {
  items: MenuItem[] | undefined;
  itemsControlled: MenuItem[] | undefined;
  active: number = 0;
  activeIndex: number = 0;
  subscription!: Subscription;
  constructor(public messageService: MessageService, public ticketService: TicketService) { }

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  ngOnInit() {
    this.subscription = this.ticketService.paymentComplete$.subscribe((personalInformation) => {
      this.messageService.add({ severity: 'success', summary: 'Order submitted', detail: 'Dear, ' + personalInformation.firstname + ' ' + personalInformation.lastname + ' your order has been completed.' });
    });
    this.itemsControlled = [
      {
        label: 'Personal Info'
      },
      {
        label: 'Reservation'
      },
      {
        label: 'Review'
      }
    ];
    this.items = [
      {
        label: 'Personal',
        command: (event: any) => this.messageService.add({ severity: 'info', summary: 'First Step', detail: event.item.label })
      },
      {
        label: 'Seat',
        command: (event: any) => this.messageService.add({ severity: 'info', summary: 'Second Step', detail: event.item.label })
      },
      {
        label: 'Payment',
        command: (event: any) => this.messageService.add({ severity: 'info', summary: 'Third Step', detail: event.item.label })
      },
      {
        label: 'Confirmation',
        command: (event: any) => this.messageService.add({ severity: 'info', summary: 'Last Step', detail: event.item.label })
      }
    ];
  }
}
