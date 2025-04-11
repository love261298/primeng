import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { CountryService } from '../../../services/country.service';
import { FilterService, SelectItemGroup } from 'primeng/api';
@Component({
  selector: 'app-auto-complate',
  templateUrl: './auto-complate.component.html',
  styleUrl: './auto-complate.component.scss'
})
export class AutoComplateComponent implements OnInit {
  items: any[] | undefined;
  selectedCity: any;

  filteredGroups!: any[];

  groupedCities: SelectItemGroup[] | undefined;
  selectedItem: any;

  suggestions: any[] = [];
  filteredItems: any[] = []
  search(event: any) {
    this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }
  filterItems(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.items as any[]).length; i++) {
      let item = (this.items as any[])[i];
      if (item.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }

    this.filteredItems = filtered;
  }
  countries: any[] | undefined;

  formGroup!: FormGroup;

  filteredCountries!: any[];

  constructor(private countryService: CountryService, private filterService: FilterService) { }
  ngOnInit() {
    this.countryService.getCountries().then((countries) => {
      this.countries = countries;
    });

    this.formGroup = new FormGroup({
      selectedCountry: new FormControl<object | null>(null)
    });

    this.groupedCities = [
      {
        label: 'Germany', value: 'de',
        items: [
          { label: 'Berlin', value: 'Berlin' },
          { label: 'Frankfurt', value: 'Frankfurt' },
          { label: 'Hamburg', value: 'Hamburg' },
          { label: 'Munich', value: 'Munich' }
        ]
      },
      {
        label: 'USA', value: 'us',
        items: [
          { label: 'Chicago', value: 'Chicago' },
          { label: 'Los Angeles', value: 'Los Angeles' },
          { label: 'New York', value: 'New York' },
          { label: 'San Francisco', value: 'San Francisco' }
        ]
      },
      {
        label: 'Japan', value: 'jp',
        items: [
          { label: 'Kyoto', value: 'Kyoto' },
          { label: 'Osaka', value: 'Osaka' },
          { label: 'Tokyo', value: 'Tokyo' },
          { label: 'Yokohama', value: 'Yokohama' }
        ]
      }
    ];
  }
  filterGroupedCity(event: AutoCompleteCompleteEvent) {
    let query = event.query;
    let filteredGroups = [];

    for (let optgroup of this.groupedCities!) {
      let filteredSubOptions = this.filterService.filter(optgroup.items, ['label'], query, "contains");
      if (filteredSubOptions && filteredSubOptions.length) {
        filteredGroups.push({
          label: optgroup.label,
          value: optgroup.value,
          items: filteredSubOptions
        });
      }
    }

    this.filteredGroups = filteredGroups;
  }
  filterCountry(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.countries as any[]).length; i++) {
      let country = (this.countries as any[])[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }
}
