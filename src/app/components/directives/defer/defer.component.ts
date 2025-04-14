import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CarService } from '../../../services/car.service';
import { Car } from '../../../domain/car';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss'
})
export class DeferComponent {
  constructor(private carService: CarService, private messageService: MessageService) { }
  cars: Car[] = [];
  onLoad() {
    this.messageService.add({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
  }

  initData() {
    this.messageService.add({ severity: 'success', summary: 'Data Initialized', detail: 'Render Completed' });
    this.carService.getCarsSmall().then((cars) => (this.cars = cars));
  }
}
