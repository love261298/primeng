import { Component } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.scss'
})
export class SkeletonComponent {
  products: any[] = [];

  ngOnInit() {
    this.products = Array.from({ length: 5 }).map((_, i) => `Item #${i}`);
  }
}
