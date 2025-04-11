import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ScrollerOptions, SelectItem, SelectItemGroup } from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  cities: City[] | undefined;
  groupedCities!: SelectItemGroup[];
  selectedCity: City | undefined;
  formGroup!: FormGroup;
  items: SelectItem[];

  selectedItem: string | undefined;
  loading: boolean = false;

  loadLazyTimeout!: any;
  constructor() {
    this.items = [];
    for (let i = 0; i < 100; i++) {
      this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
    }
  }
  onLazyLoad(event: any) {
    this.loading = true;

    if (this.loadLazyTimeout) {
      clearTimeout(this.loadLazyTimeout);
    }

    //imitate delay of a backend call
    this.loadLazyTimeout = setTimeout(() => {
      const { first, last } = event;
      const items = [...this.items];

      for (let i = first; i < last; i++) {
        items[i] = { label: `Item #${i}`, value: i };
      }

      this.items = items;
      this.loading = false;
    }, Math.random() * 1000 + 250);
  }
  options: ScrollerOptions = {
    delay: 250,
    showLoader: true,
    lazy: true,
    onLazyLoad: this.onLazyLoad.bind(this)
  };
  ngOnInit() {
    this.groupedCities = [
      {
        label: 'Germany',
        value: 'de',
        items: [
          { label: 'Berlin', value: 'Berlin' },
          { label: 'Frankfurt', value: 'Frankfurt' },
          { label: 'Hamburg', value: 'Hamburg' },
          { label: 'Munich', value: 'Munich' }
        ]
      },
      {
        label: 'USA',
        value: 'us',
        items: [
          { label: 'Chicago', value: 'Chicago' },
          { label: 'Los Angeles', value: 'Los Angeles' },
          { label: 'New York', value: 'New York' },
          { label: 'San Francisco', value: 'San Francisco' }
        ]
      },
      {
        label: 'Japan',
        value: 'jp',
        items: [
          { label: 'Kyoto', value: 'Kyoto' },
          { label: 'Osaka', value: 'Osaka' },
          { label: 'Tokyo', value: 'Tokyo' },
          { label: 'Yokohama', value: 'Yokohama' }
        ]
      }
    ];
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
    this.formGroup = new FormGroup({
      selectedCity: new FormControl<City | null>(null)
    });

  }
}
