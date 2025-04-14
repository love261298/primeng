import { ChangeDetectorRef, Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  constructor(private messageService: MessageService, private cdr: ChangeDetectorRef) { }
  progress: number = 0;
  interval!: any;
  showAnimation() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message' });
  }
  showConfirmHeadless() {
    if (!this.visible) {
      this.messageService.add({ key: 'confirm', sticky: true, severity: 'custom', summary: 'Uploading your files.' });
      this.visible = true;
      this.progress = 0;

      if (this.interval) {
        clearInterval(this.interval);
      }

      this.interval = setInterval(() => {
        if (this.progress <= 100) {
          this.progress = this.progress + 20;
        }

        if (this.progress >= 100) {
          this.progress = 100;
          clearInterval(this.interval);
        }
        this.cdr.markForCheck();
      }, 1000);
    }
  }

  onCloseHeadless() {
    this.visible = false;
  }
  showMultiple() {
    this.messageService.addAll([
      { severity: 'success', summary: 'Message 1', detail: 'Message Content' },
      { severity: 'info', summary: 'Message 2', detail: 'Message Content' },
      { severity: 'warn', summary: 'Message 3', detail: 'Message Content' },
      { severity: 'error', summary: 'Message 4', detail: 'Message Content' }
    ]);
  }
  visible: boolean = false;

  showConfirm() {
    if (!this.visible) {
      this.messageService.add({ key: 'confirm', sticky: true, severity: 'success', summary: 'Can you send me the report?' });
      this.visible = true;
    }
  }

  onConfirm() {
    this.messageService.clear('confirm');
    this.visible = false;
  }

  onReject() {
    this.messageService.clear('confirm');
    this.visible = false;
  }
  clear() {
    this.messageService.clear();
  }
  showLifeDefault() {
    this.messageService.add({ severity: 'info', summary: 'Life', detail: 'I show for 10000ms' });
  }

  showLifeLong() {
    this.messageService.add({ severity: 'info', summary: 'Life', detail: 'I show for 20000ms', life: 20000 });
  }
  showToast1() {
    this.messageService.clear();
    this.messageService.add({ key: 'toast1', severity: 'success', summary: 'Success', detail: 'key: toast1' });
  }

  showToast2() {
    this.messageService.clear();
    this.messageService.add({ key: 'toast2', severity: 'warn', summary: 'Warning', detail: 'key: toast2' });
  }
  showTopLeft() {
    this.messageService.add({ severity: 'info', summary: 'Info Message', detail: 'Message Content', key: 'tl', life: 3000 });
  }

  showBottomLeft() {
    this.messageService.add({ severity: 'warn', summary: 'Warn Message', detail: 'Message Content', key: 'bl', life: 3000 });
  }

  showBottomRight() {
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', key: 'br', life: 3000 });
  }
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content' });
  }

  showWarn() {
    this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Message Content' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
  }

  showContrast() {
    this.messageService.add({ severity: 'contrast', summary: 'Error', detail: 'Message Content' });
  }

  showSecondary() {
    this.messageService.add({ severity: 'secondary', summary: 'Secondary', detail: 'Message Content' });
  }
}
