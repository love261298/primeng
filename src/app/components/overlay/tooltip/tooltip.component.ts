import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
  tooltipOptions = {
    showDelay: 150,
    autoHide: false,
    tooltipEvent: 'hover',
    tooltipPosition: 'left'
  };
}
