import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-speed-dial',
  templateUrl: './speed-dial.component.html',
  styleUrl: './speed-dial.component.scss'
})
export class SpeedDialComponent {
  items!: MenuItem[];
  tooltipItems!: MenuItem[];

  leftTooltipItems!: MenuItem[];
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.tooltipItems = [
      {
        tooltipOptions: {
          tooltipLabel: 'Add'
        },
        icon: 'pi pi-pencil',
        command: () => {
          this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
      },
      {
        tooltipOptions: {
          tooltipLabel: 'Update'
        },
        icon: 'pi pi-refresh',
        command: () => {
          this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
      },
      {
        tooltipOptions: {
          tooltipLabel: 'Delete'
        },
        icon: 'pi pi-trash',
        command: () => {
          this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
      },
      {
        tooltipOptions: {
          tooltipLabel: 'Upload'
        },
        icon: 'pi pi-upload'
      },
      {
        tooltipOptions: {
          tooltipLabel: 'Angular Website'
        },
        icon: 'pi pi-external-link',
        url: 'http://angular.io'
      }
    ];

    this.leftTooltipItems = [
      {
        tooltipOptions: {
          tooltipLabel: 'Add',
          tooltipPosition: 'left'
        },
        icon: 'pi pi-pencil',
        command: () => {
          this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
      },
      {
        tooltipOptions: {
          tooltipLabel: 'Update',
          tooltipPosition: 'left'
        },
        icon: 'pi pi-refresh',
        command: () => {
          this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
      },
      {
        tooltipOptions: {
          tooltipLabel: 'Delete',
          tooltipPosition: 'left'
        },
        icon: 'pi pi-trash',
        command: () => {
          this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
      },
      {
        icon: 'pi pi-upload',
        tooltipOptions: {
          tooltipLabel: 'Upload',
          tooltipPosition: 'left'
        }
      },
      {
        tooltipOptions: {
          tooltipLabel: 'Angular Website',
          tooltipPosition: 'left'
        },
        icon: 'pi pi-external-link',
        url: 'http://angular.io'
      }
    ];
    this.items = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
      },
      {
        icon: 'pi pi-refresh',
        command: () => {
          this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
      },
      {
        icon: 'pi pi-trash',
        command: () => {
          this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
      },
      {
        icon: 'pi pi-upload',
        routerLink: ['/fileupload']
      },
      {
        icon: 'pi pi-external-link',
        target: '_blank',
        url: 'http://angular.io'
      }
    ];
  }
}
