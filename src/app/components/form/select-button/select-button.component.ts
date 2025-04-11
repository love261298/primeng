import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrl: './select-button.component.scss'
})
export class SelectButtonComponent {
  stateOptions: any[] = [{ label: 'One-Way', value: 'one-way' }, { label: 'Return', value: 'return' }];
  formGroup!: FormGroup;
  paymentOptions: any[] = [
    { name: 'Option 1', value: 1 },
    { name: 'Option 2', value: 2 },
    { name: 'Option 3', value: 3, constant: true }
  ];
  justifyOptions: any[] = [
    { icon: 'pi pi-align-left', justify: 'Left' },
    { icon: 'pi pi-align-right', justify: 'Right' },
    { icon: 'pi pi-align-center', justify: 'Center' },
    { icon: 'pi pi-align-justify', justify: 'Justify' }
  ];
  ngOnInit() {
    this.formGroup = new FormGroup({
      value: new FormControl('on')
    });
  }
  value: string = 'off';
}
