import { ChangeDetectorRef, Component } from '@angular/core';
import { Product } from '../../../domain/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrl: './pick-list.component.scss'
})
export class PickListComponent {
  sourceProducts!: Product[];

  targetProducts!: Product[];

  constructor(
    private carService: ProductService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.carService.getProductsSmall().then(products => {
      this.sourceProducts = products;
      this.cdr.markForCheck();
    });
    this.targetProducts = [];
  }
}
