import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../../domain/product';
import { ProductService } from '../../../services/product.service';
import { Table, TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { MenuItem, MessageService, SortEvent } from 'primeng/api';
import { CustomerService } from '../../../services/customer.service';
import { Customer, Representative } from '../../../domain/customer';
import { Car } from '../../../domain/car';
import { CarService } from '../../../services/car.service';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
  @ViewChild('dt') dt!: Table;
  @ViewChild('dt2') dt2!: Table;
  @ViewChild('dt1') dt1!: Table;
  sales!: any[];
  lastYearTotal!: number;
  thisYearTotal!: number;
  activityValues: number[] = [0, 100];
  product!: Product[];
  dialogVisible: boolean = false;
  productsExpansion!: Product[];
  searchValue: string | undefined;
  products!: Product[];
  metaKey: boolean = true;
  selectedProduct!: any;
  selectedProducts!: Product[];
  cols!: any[];
  colsToggle!: any[];
  unlockedCustomers!: Customer[];
  lockedCustomers!: Customer[];
  expandedRows: { [key: string]: boolean } = {};
  get selectedColumns(): Column[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: Column[]) {
    //restore original order
    this._selectedColumns = this.cols.filter((col) => val.includes(col));
  }
  constructor(private productService: ProductService, private customerService: CustomerService, private messageService: MessageService, private carService: CarService) {
    this.sales = [
      { product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342 },
      { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122 },
      { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500 },
      { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323 },
      { product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332 },
      { product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005 },
      { product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214 },
      { product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322 },
      { product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232 },
      { product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533 }
    ];

    this.calculateLastYearTotal();
    this.calculateThisYearTotal();
  }
  calculateCustomerTotal(name: string) {
    let total = 0;

    if (this.customers) {
      for (let customer of this.customers) {
        if (customer.representative?.name === name) {
          total++;
        }
      }
    }

    return total;
  }
  calculateLastYearTotal() {
    let total = 0;
    for (let sale of this.sales) {
      total += sale.lastYearProfit;
    }

    this.lastYearTotal = total;
  }

  calculateThisYearTotal() {
    let total = 0;
    for (let sale of this.sales) {
      total += sale.thisYearProfit;
    }

    this.thisYearTotal = total;
  }
  _selectedColumns!: Column[];
  items!: MenuItem[];
  sizes!: any[];
  loading: boolean = true;
  customers!: any[];
  customer!: any[];
  selectedSize: any = '';
  initialValue!: Product[];
  isSorted: any = null;
  first = 0;
  balanceFrozen: boolean = false;
  rows = 10;
  representatives!: Representative[];
  statuses!: any[];
  statusesEdit!: any[];
  formatCurrency(value: number) {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }
  showDialog() {
    this.dialogVisible = true;
  }
  getStatusSeverity(status: string) {
    switch (status) {
      case 'PENDING':
        return 'warning';
      case 'DELIVERED':
        return 'success';
      case 'CANCELLED':
        return 'danger';
      default:
        return undefined;
    }
  }
  toggleLock(data: Customer, frozen: boolean, index: number) {
    if (frozen) {
      this.lockedCustomers = this.lockedCustomers.filter((c, i) => i !== index);
      this.unlockedCustomers.push(data);
    } else {
      this.unlockedCustomers = this.unlockedCustomers.filter((c, i) => i !== index);
      this.lockedCustomers.push(data);
    }

    this.unlockedCustomers.sort((val1, val2) => {
      return val1.id! < val2.id! ? -1 : 1;
    });
  }
  expandAll() {
    this.expandedRows = this.productsExpansion.reduce((acc: { [key: string]: boolean }, p) => {
      if (p.id) acc[p.id] = true;
      return acc;
    }, {});
  }

  collapseAll() {
    this.expandedRows = {};
  }
  onRowExpand(event: TableRowExpandEvent) {
    this.messageService.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
  }

  onRowCollapse(event: TableRowCollapseEvent) {
    this.messageService.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
  }
  onRowSelect(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name });
  }

  onRowUnselect(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Product Unselected', detail: event.data.name });
  }
  selectProduct(product: Product) {
    this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
  }
  clonedProducts: { [s: string]: Product } = {};
  onRowEditInit(product: Product) {
    this.clonedProducts[product.id as string] = { ...product };
  }
  cars!: Car[];

  virtualCars!: Car[];
  colsScroll!: Column[];
  selectedCustomers!: Customer;
  onRowEditSave(product: Product) {
    if (product.price! > 0) {
      delete this.clonedProducts[product.id as string];
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Price' });
    }
  }
  onRowEditCancel(product: Product, index: number) {
    this.products[index] = this.clonedProducts[product.id as string];
    delete this.clonedProducts[product.id as string];
  }
  loadCarsLazy(event: any) {
    setTimeout(() => {
      let loadedCars = this.cars.slice(event.first, event.first! + event.rows!);

      this.virtualCars.splice(event.first!, event.rows!, ...loadedCars);

      if (typeof event.forceUpdate === 'function') {
        event.forceUpdate();
      }
    }, Math.random() * 1000 + 250);
  }
  viewProduct(product: Product) {
    this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: product.name });
  }

  deleteProduct(product: Product) {
    this.products = this.products.filter((p) => p.id !== product.id);
    this.messageService.add({ severity: 'info', summary: 'Product Deleted', detail: product.name });
    this.selectedProduct = null;
  }
  ngOnInit() {
    this.items = [
      { label: 'View', icon: 'pi pi-fw pi-search', command: () => this.viewProduct(this.selectedProduct) },
      { label: 'Delete', icon: 'pi pi-fw pi-times', command: () => this.deleteProduct(this.selectedProduct) }
    ];
    this._selectedColumns = this.colsToggle;
    this.colsToggle = [
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
    ];
    this.lockedCustomers = [
      {
        id: 5135,
        name: 'Geraldine Bisset',
        country: {
          name: 'France',
          code: 'fr'
        },
        company: 'Bisset Group',
        status: 'proposal',
        date: '2019-05-05',
        activity: 0,
        representative: {
          name: 'Amy Elsner',
          image: 'amyelsner.png'
        }
      }
    ];
    this.statusesEdit = [
      { label: 'In Stock', value: 'INSTOCK' },
      { label: 'Low Stock', value: 'LOWSTOCK' },
      { label: 'Out of Stock', value: 'OUTOFSTOCK' }
    ];
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];

    this.cars = Array.from({ length: 10000 }).map((_, i) => this.carService.generateCar(i + 1));
    this.virtualCars = Array.from({ length: 10000 });
    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
    ];
    this.customerService.getCustomersSmall().then((customer) => {
      this.customer = customer;
      this.loading = false;

      this.customer.forEach((custome) => (custome.date = new Date(<Date>custome.date)));
    });
    this.customerService.getCustomersLarge().then((customers) => {
      this.customers = customers;
      this.loading = false;

      this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
    });
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });
    this.productService.getProductsWithOrdersSmall().then((data) => (this.productsExpansion = data));
    this.productService.getProducts().then((data) => {
      this.product = data;
    });
    this.colsScroll = [
      { field: 'id', header: 'Id' },
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
    ];
    this.sizes = [
      { name: 'Small', class: 'p-datatable-sm' },
      { name: 'Normal', class: '' },
      { name: 'Large', class: 'p-datatable-lg' }
    ];
    console.log(this.selectedSize)
  }
  clear(table: Table) {
    table.clear();
    this.searchValue = '';
  }

  getSeverityFilter(status: string) {
    switch (status) {
      case 'unqualified':
        return 'danger';
      case 'qualified':
        return 'success';
      case 'new':
        return 'info';
      case 'negotiation':
        return 'warning';
      default:
        return undefined;
    }
  }
  onGlobalFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    this.dt2.filterGlobal(input.value, 'contains');
  }
  onGlobalFilterAdvanced(event: Event) {
    const input = event.target as HTMLInputElement;
    this.dt1.filterGlobal(input.value, 'contains');
    this.dt.filterGlobal(input.value, 'contains');
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
  onEdit(event: any) {
    if (!this.isPositiveInteger(event.target.value)) {
      event.stopPropagation();
    }
  }

  isPositiveInteger(val: any) {
    let str = String(val);

    str = str.trim();

    if (!str) {
      return false;
    }

    str = str.replace(/^0+/, '') || '0';
    var n = Math.floor(Number(str));

    return n !== Infinity && String(n) === str && n >= 0;
  }
  customSort(event: SortEvent) {
    if (this.isSorted == null || this.isSorted === undefined) {
      this.isSorted = true;
      this.sortTableData(event);
    } else if (this.isSorted == true) {
      this.isSorted = false;
      this.sortTableData(event);
    } else if (this.isSorted == false) {
      this.isSorted = null;
      this.products = [...this.initialValue];
      this.dt.reset();
    }
  }

  sortTableData(event: any) {
    event.data.sort((data1: any, data2: any) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;
      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
      else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      return event.order * result;
    });
  }
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.customers ? this.first === this.customers.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.customers ? this.first === 0 : true;
  }
}
