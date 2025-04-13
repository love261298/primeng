import { ChangeDetectorRef, Component } from '@angular/core';
import { MenuItem, MessageService, TreeNode } from 'primeng/api';
import { NodeService } from '../../../services/node.service';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss'
})
export class TreeComponent {
  files!: TreeNode[];
  filesScroll!: TreeNode[];
  loading: boolean = false;
  nodes!: TreeNode[];
  nodes2!: TreeNode[];
  selectedFile!: any;
  selectedFiles!: TreeNode[];
  items!: MenuItem[];
  metaKeySelection: boolean = false;
  constructor(private nodeService: NodeService, private messageService: MessageService, private cd: ChangeDetectorRef) { }
  expandAll() {
    this.files.forEach((node) => {
      this.expandRecursive(node, true);
    });
  }
  viewFile(file: TreeNode) {
    this.messageService.add({ severity: 'info', summary: 'Node Details', detail: file.label });
  }

  unselectFile() {
    this.selectedFile = null;
  }
  nodeExpand(event: any) {
    this.messageService.add({ severity: 'success', summary: 'Node Expanded', detail: event.node.label });
  }

  nodeCollapse(event: any) {
    this.messageService.add({ severity: 'warn', summary: 'Node Collapsed', detail: event.node.label });
  }

  nodeSelect(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
  }

  nodeUnselect(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Node Unselected', detail: event.node.label });
  }
  collapseAll() {
    this.files.forEach((node) => {
      this.expandRecursive(node, false);
    });
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach((childNode) => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }
  ngOnInit() {
    this.items = [
      { label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedFile) },
      { label: 'Unselect', icon: 'pi pi-times', command: (event) => this.unselectFile() }
    ];
    this.nodeService.getFiles().then((data) => (this.files = data));
    this.loading = true;
    this.nodes2 = this.initiateNodes2();
    this.nodeService.getFiles().then((data) => {
      this.filesScroll = this.duplicateData(data, 50);
      this.cd.markForCheck();
    });
    setTimeout(() => {
      this.nodes = this.initiateNodes();
      this.loading = false;
      this.nodes2.map((node) => (node.loading = false));
      this.cd.markForCheck();
    }, 2000);
  }
  duplicateData(data: TreeNode[], count: number): TreeNode[] {
    let duplicatedData: TreeNode[] = [];
    for (let i = 0; i < count; i++) {
      duplicatedData = [...duplicatedData, ...data.map((item) => ({ ...item }))];
    }
    return duplicatedData;
  }
  initiateNodes(): TreeNode[] {
    return [
      {
        key: '0',
        label: 'Node 0',
        leaf: false
      },
      {
        key: '1',
        label: 'Node 1',
        leaf: false
      },
      {
        key: '2',
        label: 'Node 2',
        leaf: false
      }
    ];
  }

  initiateNodes2(): TreeNode[] {
    return [
      {
        key: '0',
        label: 'Node 0',
        leaf: false,
        loading: true
      },
      {
        key: '1',
        label: 'Node 1',
        leaf: false,
        loading: true
      },
      {
        key: '2',
        label: 'Node 2',
        leaf: false,
        loading: true
      }
    ];
  }

  onNodeExpand(event: any) {
    if (!event.node.children) {
      this.loading = true;

      setTimeout(() => {
        let _node = { ...event.node };
        _node.children = [];

        for (let i = 0; i < 3; i++) {
          _node.children.push({
            key: event.node.key + '-' + i,
            label: 'Lazy ' + event.node.label + '-' + i
          });
        }

        this.nodes[parseInt(event.node.key, 10)] = _node;

        this.loading = false;
        this.cd.markForCheck();
      }, 500);
    }
  }

  onNodeExpand2(event: any) {
    if (!event.node.children) {
      event.node.loading = true;

      setTimeout(() => {
        let _node = { ...event.node };
        _node.children = [];

        for (let i = 0; i < 3; i++) {
          _node.children.push({
            key: event.node.key + '-' + i,
            label: 'Lazy ' + event.node.label + '-' + i
          });
        }

        const key = parseInt(_node.key, 10);
        this.nodes2[key] = { ..._node, loading: false };
        this.cd.markForCheck();
      }, 500);
    }
  }
}
