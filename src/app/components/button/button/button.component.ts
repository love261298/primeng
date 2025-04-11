import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  loading: boolean = false;

  load() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false
    }, 2000);
  }
}
