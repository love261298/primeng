import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  tabs = [
    { title: 'Title 1', content: 'Content 1' },
    { title: 'Title 2', content: 'Content 2' },
    { title: 'Title 3', content: 'Content 3' }
  ];
  activeIndex: number | undefined = 0;

  activeIndexChange(index: any) {
    this.activeIndex = index
  }
}
