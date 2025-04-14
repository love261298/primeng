import { Component, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-sider-bar',
  templateUrl: './sider-bar.component.html',
  styleUrl: './sider-bar.component.scss'
})
export class SiderBarComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: any): void {
    this.sidebarRef.close(e);
  }
  sidebarVisible: boolean = false;
  sidebarVisibleSize: boolean = false;
  sidebarVisible1: boolean = false;
  sidebarVisible2: boolean = false;
  sidebarVisible3: boolean = false;
  sidebarVisibleSizeFull: boolean = false;
  sidebarVisible4: boolean = false;
  sidebarVisibleTemplate: boolean = false;
  sidebarVisibleHeadless: boolean = false;
}

