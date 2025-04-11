import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-knob',
  templateUrl: './knob.component.html',
  styleUrl: './knob.component.scss'
})
export class KnobComponent {
  value: any
  formGroup!: FormGroup;
  reactive: number = 0;

  ngOnInit() {
    this.formGroup = new FormGroup({
      value: new FormControl(32)
    });
  }
}
