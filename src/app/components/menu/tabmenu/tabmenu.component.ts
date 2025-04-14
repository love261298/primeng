import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-tabmenu',
  templateUrl: './tabmenu.component.html',
  styleUrl: './tabmenu.component.scss'
})
export class TabmenuComponent {
  items: MenuItem[] = [];
  activeItem!: MenuItem;
  constructor(private messageService: MessageService) { }
  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        command: () => {
          this.messageService.add({ severity: 'success', summary: 'Selected', detail: 'Dashboard', life: 3000 });
        }
      },
      {
        label: 'Transactions',
        icon: 'pi pi-chart-line',
        command: () => {
          this.messageService.add({ severity: 'success', summary: 'Selected', detail: 'Transactions', life: 3000 });
        }
      },
      {
        label: 'Products',
        icon: 'pi pi-list',
        command: () => {
          this.messageService.add({ severity: 'success', summary: 'Selected', detail: 'Products', life: 3000 });
        }
      },
      {
        label: 'Messages',
        icon: 'pi pi-inbox',
        command: () => {
          this.messageService.add({ severity: 'success', summary: 'Selected', detail: 'Messages', life: 3000 });
        }
      }
    ];
    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
}
