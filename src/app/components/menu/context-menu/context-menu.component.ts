import { Component, ViewChild } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { ContextMenu } from 'primeng/contextmenu';
interface Users {
  id: number;
  name: string;
  image: string;
  role: string;
}
@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrl: './context-menu.component.scss'
})
export class ContextMenuComponent {
  items: MenuItem[] | undefined;
  itemsTemplate: MenuItem[] | undefined;
  @ViewChild('cm') cm!: ContextMenu;
  itemsCommand: MenuItem[] | undefined;

  @ViewChild('cm1') cm1!: ContextMenu;

  selectedUser!: any

  users!: Users[];
  selectedId!: any;
  constructor(private messageService: MessageService) {
    this.users = [
      { id: 0, name: 'Amy Elsner', image: 'amyelsner.png', role: 'Admin' },
      { id: 1, name: 'Anna Fali', image: 'annafali.png', role: 'Member' },
      { id: 2, name: 'Asiya Javayant', image: 'asiyajavayant.png', role: 'Member' },
      { id: 3, name: 'Bernardo Dominic', image: 'bernardodominic.png', role: 'Guest' },
      { id: 4, name: 'Elwin Sharvill', image: 'elwinsharvill.png', role: 'Member' }
    ];

    this.itemsCommand = [
      {
        label: 'Roles',
        icon: 'pi pi-users',
        items: [
          {
            label: 'Admin',
            command: () => {
              this.selectedUser.role = 'Admin';
            }
          },
          {
            label: 'Member',
            command: () => {
              this.selectedUser.role = 'Member';
            }
          },
          {
            label: 'Guest',
            command: () => {
              this.selectedUser.role = 'Guest';
            }
          }
        ]
      },
      {
        label: 'Invite',
        icon: 'pi pi-user-plus',
        command: () => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Invitation sent!', life: 3000 });
        }
      }
    ];
  }
  data = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'Product Description',
      image: 'black-watch.jpg',
      price: 72,
      category: 'Accessories',
      quantity: 61,
      inventoryStatus: 'INSTOCK',
      rating: 4
    },
    {
      id: '1002',
      code: 'zz21cz3c1',
      name: 'Blue Band',
      description: 'Product Description',
      image: 'blue-band.jpg',
      price: 79,
      category: 'Fitness',
      quantity: 2,
      inventoryStatus: 'LOWSTOCK',
      rating: 3
    },
    {
      id: '1003',
      code: '244wgerg2',
      name: 'Blue T-Shirt',
      description: 'Product Description',
      image: 'blue-t-shirt.jpg',
      price: 29,
      category: 'Clothing',
      quantity: 25,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1004',
      code: 'h456wer53',
      name: 'Bracelet',
      description: 'Product Description',
      image: 'bracelet.jpg',
      price: 15,
      category: 'Accessories',
      quantity: 73,
      inventoryStatus: 'INSTOCK',
      rating: 4
    }
  ];
  onContextMenu(event: any) {
    this.cm.target = event.currentTarget;
    this.cm.show(event);
  }
  onHide() {
    this.selectedId = undefined;
  }
  getBadge(user: any) {
    if (user.role === 'Member') return 'info';
    else if (user.role === 'Guest') return 'warning';
    else return undefined;
  }

  onContextMenuCommand(event: any, user: Users) {
    this.selectedUser = user;
    this.cm.show(event);
  }

  onHideCommand() {
    this.selectedUser = undefined;
  }
  ngOnInit() {
    this.items = [
      { label: 'Copy', icon: 'pi pi-copy' },
      { label: 'Rename', icon: 'pi pi-file-edit' }
    ];
    this.itemsTemplate = [
      {
        label: 'Favorite',
        icon: 'pi pi-star',
        shortcut: '⌘+D'
      },
      {
        label: 'Add',
        icon: 'pi pi-shopping-cart',
        shortcut: '⌘+A'
      },
      {
        separator: true
      },
      {
        label: 'Share',
        icon: 'pi pi-share-alt',
        items: [
          {
            label: 'Whatsapp',
            icon: 'pi pi-whatsapp',
            badge: '2'
          },
          {
            label: 'Instagram',
            icon: 'pi pi-instagram',
            badge: '3'
          }
        ]
      }
    ];
  }
}
