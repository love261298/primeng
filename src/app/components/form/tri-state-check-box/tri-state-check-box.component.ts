import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tri-state-check-box',
  templateUrl: './tri-state-check-box.component.html',
  styleUrl: './tri-state-check-box.component.scss'
})
export class TriStateCheckBoxComponent {
  value: any
  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      checked: new FormControl<boolean | null>(null)
    });
  }
}
