import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  value!: number;
  formGroup!: FormGroup;
  rangeValues: number[] = [20, 80];
  stateOptions: any[] = [
    { label: 'Off', value: 'off' },
    { label: 'On', value: 'on' }
  ];

  ngOnInit() {
    this.formGroup = new FormGroup({
      value: new FormControl('on')
    });
  }
}
