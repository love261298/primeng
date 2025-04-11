import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrl: './color-picker.component.scss'
})
export class ColorPickerComponent {
  color!: string
  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      color: new FormControl()
    });
  }
}
