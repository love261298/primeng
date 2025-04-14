import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  visible: boolean = false;
  visibleModal: boolean = false;
  visibleLong: boolean = false;
  visibleBasic: boolean = false;
  visibleTemplate: boolean = false;
  visibleMaximizable: boolean = false;
  visibleResponsive: boolean = false;
  visibleHeadless: boolean = false;
  position: "center" | "top" | "bottom" | "left" | "right" | "topleft" | "topright" | "bottomleft" | "bottomright" = "top";
  showDialog(p: any) {
    switch (p) {
      case "basic":
        console.log(p);
        this.visibleBasic = true;
        break;
      case "Headless":
        this.visibleHeadless = true;
        break;
      case "Template":
        this.visibleTemplate = true;
        break;
      case "Maximizable":
        this.visibleMaximizable = true;
        break;
      case "Long":
        this.visibleLong = true;
        break;
      case "Modal":
        this.visibleModal = true;
        break;
      case "Responsive":
        this.visibleResponsive = true;
        break;
      default:
        this.visible = true;
        this.position = p
    }
  }
  closeDialog() {
    this.visibleHeadless = false;
  }
}
