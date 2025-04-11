import { Component } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';

interface City {
  name: string,
  code: string
}
interface Country {
  name: string,
  code: string
}

@Component({
  selector: 'app-list-box',
  templateUrl: './list-box.component.html',
  styleUrl: './list-box.component.scss'
})
export class ListBoxComponent {
  items = Array.from({ length: 100 }, (_, i) => ({ label: `Item #${i}`, value: i }))

  selectedItems!: any[];

  selectAll = false;

  onSelectAllChange(event: any) {
    this.selectedItems = event.checked ? [...this.items] : [];
    this.selectAll = event.checked;
    event.updateModel(this.selectedItems, event.originalEvent)
  }

  onChange(event: any) {
    const { originalEvent, value } = event
    if (value) this.selectAll = value.length === this.items.length;
  }
  cities!: City[];
  selectedCitys!: City[];
  selectedCity!: City;
  groupedCities!: SelectItemGroup[];

  selectedCountry!: Country;

  constructor() {
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
  }

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
}
