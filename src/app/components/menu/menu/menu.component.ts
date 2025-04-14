import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  items: MenuItem[] | undefined;
  itemsGroup: MenuItem[] | undefined;
  itemsRouter: MenuItem[] | undefined;
  itemsTemplate: MenuItem[] | undefined;
  constructor(private messageService: MessageService, private router: Router) { }
  ngOnInit() {
    this.itemsRouter = [
      {
        label: 'Navigate',
        items: [
          {
            label: 'Router Link',
            icon: 'pi pi-palette',
            route: '/guides/csslayer'
          },
          {
            label: 'Programmatic',
            icon: 'pi pi-link',
            command: () => {
              this.router.navigate(['/installation']);
            }
          },
          {
            label: 'External',
            icon: 'pi pi-home',
            url: 'https://angular.io//'
          }
        ]
      }
    ];
    this.itemsTemplate = [
      {
        separator: true
      },
      {
        label: 'Documents',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
            shortcut: '⌘+N'
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
            shortcut: '⌘+S'
          }
        ]
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            shortcut: '⌘+O'
          },
          {
            label: 'Messages',
            icon: 'pi pi-inbox',
            badge: '2'
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            shortcut: '⌘+Q'
          }
        ]
      },
      {
        separator: true
      }
    ];
    this.itemsGroup = [
      {
        label: 'Documents',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus'
          },
          {
            label: 'Search',
            icon: 'pi pi-search'
          }
        ]
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog'
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out'
          }
        ]
      }
    ];
    this.items = [
      {
        label: 'New',
        icon: 'pi pi-plus',
        command: () => {
          this.update();
        }
      },
      {
        label: 'Search',
        icon: 'pi pi-search',
        command: () => {
          this.delete();
        }
      }
    ];
  }
  update() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'File created', life: 3000 });
  }

  delete() {
    this.messageService.add({ severity: 'warn', summary: 'Search Completed', detail: 'No results found', life: 3000 });
  }
}
