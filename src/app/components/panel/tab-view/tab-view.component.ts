import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-view',
  templateUrl: './tab-view.component.html',
  styleUrl: './tab-view.component.scss'
})
export class TabViewComponent {
  tabs: { title: string, content: string }[] = [];
  activeIndex: number = 0;
  ngOnInit() {
    this.tabs = [
      { title: 'Tab 1', content: 'Tab 1 Content' },
      { title: 'Tab 2', content: 'Tab 2 Content' },
      { title: 'Tab 3', content: 'Tab 3 Content' }
    ];
  }
  scrollableTabs: any[] = Array.from({ length: 50 }, (_, i) => ({ title: "Title", content: "Content" }));
}
