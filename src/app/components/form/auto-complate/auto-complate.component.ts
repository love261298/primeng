import { Component } from '@angular/core';

@Component({
  selector: 'app-auto-complate',
  templateUrl: './auto-complate.component.html',
  styleUrl: './auto-complate.component.scss'
})
export class AutoComplateComponent {
  items: any[] | undefined;

  selectedItem: any;

  suggestions: any[] = [];

  search(event: any) {
    this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }
}
