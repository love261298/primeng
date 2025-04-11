import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-mask',
  templateUrl: './input-mask.component.html',
  styleUrl: './input-mask.component.scss'
})
export class InputMaskComponent {
  value!: any;
  formGroup: FormGroup | undefined;

  ngOnInit() {
    this.formGroup = new FormGroup({
      value: new FormControl<string | null>(null)
    });
  }
}
