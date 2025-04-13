import { Component, ViewChild } from '@angular/core';
import { Scroller } from 'primeng/scroller';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrl: './scroller.component.scss'
})
export class ScrollerComponent {
  items!: string[];
  itemsArray!: string[][];
  @ViewChild('sc') sc!: Scroller;
  ngOnInit() {
    this.items = Array.from({ length: 1000 }).map((_, i) => `Item #${i}`);
    this.itemsArray = Array.from({ length: 1000 }).map((_, i) => Array.from({ length: 1000 }).map((_j, j) => `Item #${i}_${j}`));
  }
  reset() {
    this.sc.scrollToIndex(0, 'smooth');
  }
  lazyLoading: boolean = true;

  loadLazyTimeout: any;
  onLazyLoad(event: any) {
    this.lazyLoading = true;

    if (this.loadLazyTimeout) {
      clearTimeout(this.loadLazyTimeout);
    }

    //imitate delay of a backend call
    this.loadLazyTimeout = setTimeout(() => {
      const { first, last } = event;
      const lazyItems = [...this.items];

      for (let i = first; i < last; i++) {
        lazyItems[i] = `Item #${i}`;
      }

      this.items = lazyItems;
      this.lazyLoading = false;
    }, Math.random() * 1000 + 250);
  }
}
