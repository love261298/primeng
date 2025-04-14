import { ChangeDetectorRef, Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { TableRowSelectEvent } from 'primeng/table';
import { Product } from '../../../domain/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-overlay-panel',
  templateUrl: './overlay-panel.component.html',
  styleUrl: './overlay-panel.component.scss'
})
export class OverlayPanelComponent {
  members = [
    { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' }
  ];
  constructor(private productService: ProductService, private messageService: MessageService, private cdr: ChangeDetectorRef) { }

  products: Product[] = [];

  selectedProduct: Product | undefined;

  ngOnInit() {
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
      this.selectedProduct = products[0];
      this.cdr.markForCheck()
    });
  }

  onRowSelect(event: TableRowSelectEvent, op: OverlayPanel) {
    this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name });
    op.hide();
  }
}
