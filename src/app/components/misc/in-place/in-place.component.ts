import { Component } from '@angular/core';
import { Product } from '../../../domain/product';
import { ProductService } from '../../../services/product.service';
import { Car } from '../../../domain/car';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-in-place',
  templateUrl: './in-place.component.html',
  styleUrl: './in-place.component.scss'
})
export class InPlaceComponent {
  products: Product[] = [];
  cars: Car[] = [];
  constructor(private productService: ProductService, private carService: CarService) { }

  loadData() {
    this.productService.getProductsSmall().then((products) => (this.products = products));
    this.carService.getCarsSmall().then((cars) => (this.cars = cars));
  }
}
