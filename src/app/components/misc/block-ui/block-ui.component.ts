import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-block-ui',
  templateUrl: './block-ui.component.html',
  styleUrl: './block-ui.component.scss'
})
export class BlockUiComponent {
  blockedPanel: boolean = false;
  blockedDocument: boolean = false;

  constructor(private cd: ChangeDetectorRef) { }

  blockDocument() {
    this.blockedDocument = true;
    setTimeout(() => {
      this.blockedDocument = false;
      this.cd.markForCheck();
    }, 3000);
  }
}
