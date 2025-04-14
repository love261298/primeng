import { Component } from '@angular/core';
import { MessageService, Footer } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FloatLabelComponent } from '../../form/float-label/float-label.component';

@Component({
  selector: 'app-dynamic-dialog',
  templateUrl: './dynamic-dialog.component.html',
  styleUrl: './dynamic-dialog.component.scss'
})
export class DynamicDialogComponent {
  constructor(public dialogService: DialogService, public messageService: MessageService) { }

  ref: DynamicDialogRef | undefined;

  show() {
    this.ref = this.dialogService.open(FloatLabelComponent, {
      header: 'Select a Product',
      width: '50vw',
      contentStyle: { overflow: 'auto' },
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
      },
      templates: {
        footer: Footer
      }
    });

    this.ref.onClose.subscribe((data: any) => {
      let summary_and_detail;
      if (data) {
        const buttonType = data?.buttonType;
        summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: `Pressed '${buttonType}' button` } : { summary: 'Product Selected', detail: data?.name };
      } else {
        summary_and_detail = { summary: 'No Product Selected', detail: 'Pressed Close button' };
      }
      this.messageService.add({ severity: 'info', ...summary_and_detail, life: 3000 });
    });

    this.ref.onMaximize.subscribe((value: any) => {
      this.messageService.add({ severity: 'info', summary: 'Maximized', detail: `maximized: ${value.maximized}` });
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
