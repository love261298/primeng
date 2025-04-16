import { Component } from '@angular/core';
import { TooltipOptions } from 'primeng/api';
@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
  tooltipOptions: TooltipOptions = {
    showDelay: 150,
    tooltipEvent: 'hover',
    tooltipPosition: 'left'
  };
}
