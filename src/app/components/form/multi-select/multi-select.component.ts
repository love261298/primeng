import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SelectItemGroup } from 'primeng/api';
import { MultiSelect } from 'primeng/multiselect';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss'
})
export class MultiSelectComponent {
  @ViewChild('ms') ms!: MultiSelect;
  cities!: City[];
  formGroup!: FormGroup;
  groupedCities!: SelectItemGroup[];
  selectedCities!: City[];

  items = Array.from({ length: 100 }, (_, i) => ({ label: `Item #${i}`, value: i }))

  selectedItems!: any[];

  selectAll: boolean = false;

  onSelectAllChange(event: any) {
    this.selectedItems = event.checked ? [...this.ms.visibleOptions()] : [];
    this.selectAll = event.checked;
  }
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
    this.formGroup = new FormGroup({
      selectedCities: new FormControl<City[] | null>([{ name: 'Istanbul', code: 'IST' }])
    });
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }
}
