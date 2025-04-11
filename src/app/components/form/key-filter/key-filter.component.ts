import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-key-filter',
  templateUrl: './key-filter.component.html',
  styleUrl: './key-filter.component.scss'
})
export class KeyFilterComponent {
  blockSpace: RegExp = /[^s]/;
  blockChars: RegExp = /^[^<>*!]+$/;
  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      value: new FormControl(1234)
    });
  }
}
