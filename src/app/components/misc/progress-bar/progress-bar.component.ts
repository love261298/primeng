import { Component, NgZone } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  value: number = 0;

  interval: any;

  constructor(private messageService: MessageService, private ngZone: NgZone) { }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.interval = setInterval(() => {
        this.ngZone.run(() => {
          this.value = this.value + Math.floor(Math.random() * 10) + 1;
          if (this.value >= 100) {
            this.value = 100;
            this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
            clearInterval(this.interval);
          }
        });
      }, 2000);
    });
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
