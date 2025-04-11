import { ChangeDetectorRef, Component } from '@angular/core';
import { NodeService } from '../../../services/node.service';
import { FormGroup, FormControl } from '@angular/forms';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrl: './tree-select.component.scss'
})
export class TreeSelectComponent {
  nodes!: any[];
  loading: boolean = false;
  selectedNodes: any;
  formGroup!: FormGroup;
  constructor(private nodeService: NodeService, private cd: ChangeDetectorRef) {
    this.nodeService.getFiles().then((files) => (this.nodes = files));
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
  onNodeExpand(event: any) {
    if (!event.node.children) {
      this.loading = true;

      setTimeout(() => {
        let _node = { ...event.node };
        _node.children = [];

        for (let i = 0; i < 150; i++) {
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
  ngOnInit() {
    this.loading = true;

    setTimeout(() => {
      this.nodes = this.initiateNodes();
      this.loading = false;
      this.cd.markForCheck();
    }, 2000);
    this.formGroup = new FormGroup({
      selectedNodes: new FormControl()
    });
  }
}
