import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-bread-crumd',
  templateUrl: './bread-crumd.component.html',
  styleUrl: './bread-crumd.component.scss'
})
export class BreadCrumdComponent {
  items: MenuItem[] | undefined;
  itemsTemplate: MenuItem[] | undefined;
  itemsRouter: MenuItem[] | undefined;

  home: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Electronics' },
      { label: 'Computer' },
      { label: 'Accessories' },
      { label: 'Keyboard' },
      { label: 'Wireless' }
    ];
    this.itemsTemplate = [{ icon: 'pi pi-sitemap' }, { icon: 'pi pi-book' }, { icon: 'pi pi-wallet' }, { icon: 'pi pi-shopping-bag' }, { icon: 'pi pi-calculator' }];
    this.itemsRouter = [{ icon: 'pi pi-home', route: '/installation' }, { label: 'Components' }, { label: 'Form' }, { label: 'InputText', route: '/inputtext' }];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
