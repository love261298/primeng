import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss'
})
export class RadioButtonComponent {
  ingredient!: string;
  checked: boolean = false;
  selectedCategory: any = null;
  formGroup!: FormGroup;
  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
  ];

  ngOnInit() {
    this.selectedCategory = this.categories[1];
    this.formGroup = new FormGroup({
      selectedCategory: new FormControl()
    });
  }
}
