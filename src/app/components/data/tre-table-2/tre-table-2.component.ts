import { Component } from '@angular/core';
import { MenuItem, MessageService, TreeNode } from 'primeng/api';
import { NodeService } from '../../../services/node.service';

interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-tre-table-2',
  templateUrl: './tre-table-2.component.html',
  styleUrl: './tre-table-2.component.scss'
})
export class TreTable2Component {
  files!: TreeNode[];
  cols!: Column[];
  selectedColumns!: Column[];
  selectedNode!: TreeNode;
  items!: MenuItem[];
  constructor(private nodeService: NodeService, private messageService: MessageService) { }

  ngOnInit() {
    this.nodeService.getFilesystem().then((files) => (this.files = files));
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
    ];
    this.selectedColumns = this.cols;
    this.items = [
      { label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedNode) },
      { label: 'Toggle', icon: 'pi pi-sort', command: (event) => this.toggleFile(this.selectedNode) }
    ];
  }
  viewFile(node: any) {
    this.messageService.add({ severity: 'info', summary: 'File Selected', detail: node.data.name + ' - ' + node.data.size });
  }

  toggleFile(node: any) {
    node.expanded = !node.expanded;
    this.files = [...this.files];
  }
}
