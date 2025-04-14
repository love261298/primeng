import { Component } from '@angular/core';
import { Product } from '../../../domain/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrl: './drag-drop.component.scss'
})
export class DragDropComponent {
  availableProducts: Product[] = [];

  selectedProducts: Product[] = [];

  draggedProduct: Product | undefined | null;

  ngOnInit() {
    this.selectedProducts = [];
    this.availableProducts = [
      { id: '1', name: 'Black Watch' },
      { id: '2', name: 'Bamboo Watch' }
    ];
    this.productService.getProductsSmall().then((products) => (this.availableProducts = products));
  }
  constructor(private productService: ProductService) { }
  dragStart(product: Product) {
    this.draggedProduct = product;
  }

  drop() {
    if (this.draggedProduct) {
      let draggedProductIndex = this.findIndex(this.draggedProduct);
      this.selectedProducts = [...(this.selectedProducts as Product[]), this.draggedProduct];
      this.availableProducts = this.availableProducts?.filter((val, i) => i != draggedProductIndex);
      this.draggedProduct = null;
    }
  }

  dragEnd() {
    this.draggedProduct = null;
  }

  findIndex(product: Product) {
    let index = -1;
    for (let i = 0; i < (this.availableProducts as Product[]).length; i++) {
      if (product.id === (this.availableProducts as Product[])[i].id) {
        index = i;
        break;
      }
    }
    return index;
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
        return;
    }
  }
}
