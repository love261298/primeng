import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss'
})
export class ChipsComponent {
  values: string[] | undefined;
  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      values: new FormControl<string[] | null>(null)
    });
  }
}
