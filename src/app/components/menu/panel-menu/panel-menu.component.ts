import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-panel-menu',
  templateUrl: './panel-menu.component.html',
  styleUrl: './panel-menu.component.scss'
})
export class PanelMenuComponent {
  items!: MenuItem[];
  toggleAll() {
    const expanded = !this.areAllItemsExpanded();
    this.items = this.toggleAllRecursive(this.items, expanded);
  }

  private toggleAllRecursive(items: MenuItem[], expanded: boolean): MenuItem[] {
    return items.map((menuItem) => {
      menuItem.expanded = expanded;
      if (menuItem.items) {
        menuItem.items = this.toggleAllRecursive(menuItem.items, expanded);
      }
      return menuItem;
    });
  }

  private areAllItemsExpanded(): boolean {
    return this.items.every((menuItem) => menuItem.expanded);
  }
  ngOnInit() {
    this.items = [
      {
        label: 'Files',
        icon: 'pi pi-file',
        items: [
          {
            label: 'Documents',
            icon: 'pi pi-file',
            items: [
              {
                label: 'Invoices',
                icon: 'pi pi-file-pdf',
                items: [
                  {
                    label: 'Pending',
                    icon: 'pi pi-stop'
                  },
                  {
                    label: 'Paid',
                    icon: 'pi pi-check-circle'
                  }
                ]
              },
              {
                label: 'Clients',
                icon: 'pi pi-users'
              }
            ]
          },
          {
            label: 'Images',
            icon: 'pi pi-image',
            items: [
              {
                label: 'Logos',
                icon: 'pi pi-image'
              }
            ]
          }
        ]
      },
      {
        label: 'Cloud',
        icon: 'pi pi-cloud',
        items: [
          {
            label: 'Upload',
            icon: 'pi pi-cloud-upload'
          },
          {
            label: 'Download',
            icon: 'pi pi-cloud-download'
          },
          {
            label: 'Sync',
            icon: 'pi pi-refresh'
          }
        ]
      },
      {
        label: 'Devices',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Phone',
            icon: 'pi pi-mobile'
          },
          {
            label: 'Desktop',
            icon: 'pi pi-desktop'
          },
          {
            label: 'Tablet',
            icon: 'pi pi-tablet'
          }
        ]
      }
    ]
  }
}
