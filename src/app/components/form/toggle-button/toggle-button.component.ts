import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.scss'
})
export class ToggleButtonComponent {
  checked: boolean = false;
  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      checked: new FormControl<boolean>(false)
    });
  }
}
