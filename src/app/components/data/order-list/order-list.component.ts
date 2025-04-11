import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../domain/product';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent {
  products!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsSmall().then((cars) => (this.products = cars));
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return undefined;
    }
  }
}
