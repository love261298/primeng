import { Component } from '@angular/core';


@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss'
})
export class PaginatorComponent {
  first: number = 0;

  rows: number = 10;

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
  first1: number = 0;

  rows1: number = 10;

  first2: number = 0;

  rows2: number = 10;

  first3: number = 0;

  rows3: number = 10;

  totalRecords: number = 120;

  options = [
    { label: 5, value: 5 },
    { label: 10, value: 10 },
    { label: 20, value: 20 },
    { label: 120, value: 120 }
  ];

  onPageChange1(event: any) {
    this.first1 = event.first;
    this.rows1 = event.rows;
  }

  onPageChange2(event: any) {
    this.first2 = event.first;
    this.rows2 = event.rows;
  }

  onPageChange3(event: any) {
    this.first3 = event.first;
    this.rows3 = event.rows;
  }
}
