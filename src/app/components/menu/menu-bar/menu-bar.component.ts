import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {
  items: MenuItem[] | undefined;
  itemsRouter: MenuItem[] | undefined;
  itemsCommand: MenuItem[] | undefined;
  constructor(private messageService: MessageService, private router: Router) { }
  ngOnInit() {
    this.itemsRouter = [
      {
        label: 'Router',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Installation',
            route: '/installation'
          },
          {
            label: 'Configuration',
            route: '/configuration'
          }
        ]
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
        items: [
          {
            label: 'Angular',
            url: 'https://angular.io/'
          },
          {
            label: 'Vite.js',
            url: 'https://vitejs.dev/'
          }
        ]
      }
    ];
    this.itemsCommand = [
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
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Features',
        icon: 'pi pi-star'
      },
      {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
          {
            label: 'Core',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S'
          },
          {
            label: 'Blocks',
            icon: 'pi pi-server',
            shortcut: '⌘+B'
          },
          {
            label: 'UI Kit',
            icon: 'pi pi-pencil',
            shortcut: '⌘+U'
          },
          {
            separator: true
          },
          {
            label: 'Templates',
            icon: 'pi pi-palette',
            items: [
              {
                label: 'Apollo',
                icon: 'pi pi-palette',
                badge: '2'
              },
              {
                label: 'Ultima',
                icon: 'pi pi-palette',
                badge: '3'
              }
            ]
          }
        ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        badge: '3'
      }
    ];
  }
}
