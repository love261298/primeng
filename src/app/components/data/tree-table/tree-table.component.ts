import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NodeService } from '../../../services/node.service';
import { MessageService, TreeNode } from 'primeng/api';
import { TreeTable } from 'primeng/treetable';

interface Column {
  field: string;
  header: string;
  filterMatchMode?: string;
}

@Component({
  selector: 'app-tree-table',
  templateUrl: './tree-table.component.html',
  styleUrl: './tree-table.component.scss'
})
export class TreeTableComponent {
  @ViewChild('tt') tt!: TreeTable;
  sales!: TreeNode[];
  files!: TreeNode[];
  file!: TreeNode[];
  cols!: Column[];
  totalRecords!: number;
  sizes!: any[];
  loading: boolean = false;
  selectedSize: any = '';
  selectionKeys = {};
  selectedNode!: TreeNode;
  selectedNodes!: TreeNode[];
  dialogVisible: boolean = false;
  filterMode = 'lenient';
  metaKeySelection: boolean = true;
  frozenCols!: Column[];
  scrollableCols!: Column[];
  filterModes = [
    { label: 'Lenient', value: 'lenient' },
    { label: 'Strict', value: 'strict' }
  ];
  onGlobalFilter(event: any) {
    const input = event.target as HTMLInputElement;
    this.tt.filterGlobal(input.value, 'contains');
  }
  constructor(private nodeService: NodeService, private cd: ChangeDetectorRef, private messageService: MessageService) { }
  onColumnFilter(event: Event, col: any) {
    const input = event.target as HTMLInputElement;
    this.tt.filter(input.value, col.field, col.filterMatchMode || 'contains');
  }
  loadNodes(event: any) {
    this.loading = true;

    setTimeout(() => {
      this.files = [];

      for (let i = 0; i < event.rows; i++) {
        let node = {
          data: {
            name: 'Item ' + (event.first + i),
            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
            type: 'Type ' + (event.first + i)
          },
          leaf: false
        };

        this.files.push(node);
      }
      this.loading = false;
      this.cd.markForCheck();
    }, 1000);
  }

  onNodeExpand(event: any) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      const node = event.node;

      node.children = [
        {
          data: {
            name: node.data.name + ' - 0',
            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
            type: 'File'
          }
        },
        {
          data: {
            name: node.data.name + ' - 1',
            size: Math.floor(Math.random() * 1000) + 1 + 'kb',
            type: 'File'
          }
        }
      ];

      this.files = [...this.files];
      this.cd.markForCheck();
    }, 250);
  }
  ngOnInit() {
    this.scrollableCols = [
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
    ];

    this.frozenCols = [{ field: 'name', header: 'Name' }];
    this.totalRecords = 1000;

    this.loading = true;

    this.sales = [
      {
        data: { brand: 'Bliss', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
        children: [
          {
            data: { brand: 'Product A', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$34,406.00', thisYearProfit: '$23,342' },
            children: [
              {
                data: { brand: 'Product A-1', lastYearSale: '20%', thisYearSale: '10%', lastYearProfit: '$24,406.00', thisYearProfit: '$13,342' }
              },
              {
                data: { brand: 'Product A-2', lastYearSale: '5%', thisYearSale: '10%', lastYearProfit: '$10,000.00', thisYearProfit: '$10,000' }
              }
            ]
          },
          {
            data: { brand: 'Product B', lastYearSale: '26%', thisYearSale: '20%', lastYearProfit: '$24,000.00', thisYearProfit: '$23,000' }
          }
        ]
      },
      {
        data: { brand: 'Fate', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
        children: [
          {
            data: { brand: 'Product X', lastYearSale: '50%', thisYearSale: '40%', lastYearProfit: '$223,132', thisYearProfit: '$156,061' }
          },
          {
            data: { brand: 'Product Y', lastYearSale: '33%', thisYearSale: '56%', lastYearProfit: '$200,000', thisYearProfit: '$156,061' }
          }
        ]
      },
      {
        data: { brand: 'Ruby', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
        children: [
          {
            data: { brand: 'Product M', lastYearSale: '18%', thisYearSale: '2%', lastYearProfit: '$10,300', thisYearProfit: '$5,500' }
          },
          {
            data: { brand: 'Product N', lastYearSale: '20%', thisYearSale: '3%', lastYearProfit: '$2,021', thisYearProfit: '$3,000' }
          }
        ]
      },
      {
        data: { brand: 'Sky', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323' },
        children: [
          {
            data: { brand: 'Product P', lastYearSale: '20%', thisYearSale: '16%', lastYearProfit: '$345,232', thisYearProfit: '$350,000' }
          },
          {
            data: { brand: 'Product R', lastYearSale: '29%', thisYearSale: '6%', lastYearProfit: '$400,009', thisYearProfit: '$300,323' }
          }
        ]
      },
      {
        data: { brand: 'Comfort', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
        children: [
          {
            data: { brand: 'Product S', lastYearSale: '10%', thisYearSale: '40%', lastYearProfit: '$243,242', thisYearProfit: '$100,000' }
          },
          {
            data: { brand: 'Product T', lastYearSale: '7%', thisYearSale: '39%', lastYearProfit: '$400,00', thisYearProfit: '$400,332' }
          }
        ]
      },
      {
        data: { brand: 'Merit', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
        children: [
          {
            data: { brand: 'Product L', lastYearSale: '20%', thisYearSale: '40%', lastYearProfit: '$121,132', thisYearProfit: '$100,000' }
          },
          {
            data: { brand: 'Product G', lastYearSale: '32%', thisYearSale: '25%', lastYearProfit: '$300,000', thisYearProfit: '$50,005' }
          }
        ]
      },
      {
        data: { brand: 'Violet', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
        children: [
          {
            data: { brand: 'Product SH1', lastYearSale: '30%', thisYearSale: '6%', lastYearProfit: '$101,211', thisYearProfit: '$30,214' }
          },
          {
            data: { brand: 'Product SH2', lastYearSale: '52%', thisYearSale: '6%', lastYearProfit: '$30,000', thisYearProfit: '$70,000' }
          }
        ]
      },
      {
        data: { brand: 'Dulce', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
        children: [
          {
            data: { brand: 'Product PN1', lastYearSale: '22%', thisYearSale: '25%', lastYearProfit: '$33,221', thisYearProfit: '$20,000' }
          },
          {
            data: { brand: 'Product PN2', lastYearSale: '22%', thisYearSale: '25%', lastYearProfit: '$33,221', thisYearProfit: '$33,322' }
          }
        ]
      },
      {
        data: { brand: 'Solace', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
        children: [
          {
            data: { brand: 'Product HT1', lastYearSale: '60%', thisYearSale: '36%', lastYearProfit: '$465,000', thisYearProfit: '$150,653' }
          },
          {
            data: { brand: 'Product HT2', lastYearSale: '30%', thisYearSale: '20%', lastYearProfit: '$300,442', thisYearProfit: '$145,579' }
          }
        ]
      },
      {
        data: { brand: 'Essence', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' },
        children: [
          {
            data: { brand: 'Product TS1', lastYearSale: '50%', thisYearSale: '34%', lastYearProfit: '$11,000', thisYearProfit: '$8,562' }
          },
          {
            data: { brand: 'Product TS2', lastYearSale: '25%', thisYearSale: '20%', lastYearProfit: '$11,212', thisYearProfit: '$3,971' }
          }
        ]
      }
    ];
    this.selectionKeys = {
      '0-0': {
        partialChecked: false,
        checked: true
      }
    };
    this.nodeService.getFilesystem().then((files) => {
      this.files = files.slice(0, 5);
      this.file = files;
      this.cd.markForCheck();
    });
    this.cols = [
      { field: 'name', header: 'Name', filterMatchMode: 'contains' },
      { field: 'size', header: 'Size', filterMatchMode: 'equals' },
      { field: 'type', header: 'Type', filterMatchMode: 'contains' },
      { field: '', header: '' }
    ];
    this.sizes = [
      { name: 'Small', class: 'p-treetable-sm' },
      { name: 'Normal', class: '' },
      { name: 'Large', class: 'p-treetable-lg' }
    ];
  }
  toggleApplications() {
    if (this.files && this.files.length > 0) {
      const newFiles = [...this.files];
      newFiles[0] = { ...newFiles[0], expanded: !newFiles[0].expanded };
      this.files = newFiles;
    }
  }
  nodeSelect(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Node Selected', detail: event.node.data.name });
  }

  nodeUnselect(event: any) {
    this.messageService.add({ severity: 'warn', summary: 'Node Unselected', detail: event.node.data.name });
  }
}
