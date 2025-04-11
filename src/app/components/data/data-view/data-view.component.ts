import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { SelectItem } from 'primeng/api';

interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrl: './data-view.component.scss'
})
export class DataViewComponent {
  layout: 'list' | 'grid' = 'list';
  products!: Product[];
  sortOptions!: SelectItem[];

  sortOrder!: number;

  sortField!: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().then((data) => (this.products = data.slice(0, 6)));
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
  }
  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return undefined;
    }
  };
  counterArray(n: number): any[] {
    return Array(n);
  }
}
