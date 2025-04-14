import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-tiered-menu',
  templateUrl: './tiered-menu.component.html',
  styleUrl: './tiered-menu.component.scss'
})
export class TieredMenuComponent {
  items: MenuItem[] | undefined;
  constructor(private messageService: MessageService) { }
  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            command: () => {
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
            }
          },
          {
            label: 'Print',
            icon: 'pi pi-print',
            command: () => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No printer connected', life: 3000 });
            }
          }
        ]
      },
      {
        label: 'Search',
        icon: 'pi pi-search',
        command: () => {
          this.messageService.add({ severity: 'warn', summary: 'Search Results', detail: 'No results found', life: 3000 });
        }
      },
      {
        separator: true
      },
      {
        label: 'Sync',
        icon: 'pi pi-cloud',
        items: [
          {
            label: 'Import',
            icon: 'pi pi-cloud-download',
            command: () => {
              this.messageService.add({ severity: 'info', summary: 'Downloads', detail: 'Downloaded from cloud', life: 3000 });
            }
          },
          {
            label: 'Export',
            icon: 'pi pi-cloud-upload',
            command: () => {
              this.messageService.add({ severity: 'info', summary: 'Shared', detail: 'Exported to cloud', life: 3000 });
            }
          }
        ]
      }
    ];
  }
}
