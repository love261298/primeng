import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  active: number = 0;

  name!: string

  email!: string

  password!: string

  option1: boolean | undefined = false;

  option2: boolean | undefined = false;

  option3: boolean | undefined = false;

  option4: boolean | undefined = false;

  option5: boolean | undefined = false;

  option6: boolean | undefined = false;

  option7: boolean | undefined = false;

  option8: boolean | undefined = false;

  option9: boolean | undefined = false;

  option10: boolean | undefined = false;
}
