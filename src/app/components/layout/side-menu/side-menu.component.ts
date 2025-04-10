import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Form',
        items:
          [
            { label: 'AutoComplete', command: () => { this.router.navigate(["/form/auto-complete"]) } },
            { label: 'Calendar', command: () => { this.router.navigate(["/form/calendar"]) } },
            { label: 'CascadeSelect' },
            { label: 'Checkbox' },
            { label: 'Chips' },
            { label: 'ColorPicker' },
            { label: 'Dropdown' },
            { label: 'Editor' },
            { label: 'FloatLabel' },
            { label: 'IconField' },
            { label: 'InputGroup' },
            { label: 'InputMask' },
            { label: 'InputSwitch' },
            { label: 'InputText' },
            { label: 'InputTextarea' },
            { label: 'InputNumber' },
            { label: 'InputOtp' },
            { label: 'Knob' },
            { label: 'KeyFilter' },
            { label: 'Listbox' },
            { label: 'MultiSelect' },
            { label: 'Password' },
            { label: 'RadioButton' },
            { label: 'Rating' },
            { label: 'SelectButton' },
            { label: 'Slider' },
            { label: 'TreeSelect' },
            { label: 'TriStateCheckbox' },
            { label: 'ToggleButton' }
          ]
      },
      {
        label: 'Button',
        items:
          [
            { label: 'Button' },
            { label: 'SplitButton' },
            { label: 'SplitButton' },
          ]
      },
      {
        label: 'Data',
        items:
          [
            { label: 'DataView' },
            { label: 'OrderList' },
            { label: 'Org Chart' },
            { label: 'Paginator' },
            { label: 'PickList' },
            { label: 'Scroller' },
            { label: 'Table' },
            { label: 'Timeline' },
            { label: 'Tree' },
            { label: 'TreeTable' }
          ]
      },
      {
        label: 'Panel',
        items:
          [
            { label: 'Accordion' },
            { label: 'Card' },
            { label: 'Divider' },
            { label: 'Fieldset' },
            { label: 'Panel' },
            { label: 'Splitter' },
            { label: 'Stepper' },
            { label: 'ScrollPanel' },
            { label: 'TabView' },
            { label: 'Toolbar' }
          ]
      },
      {
        label: 'Overlay',
        items:
          [
            { label: 'ConfirmDialog' },
            { label: 'ConfirmPopup' },
            { label: 'Dialog' },
            { label: 'DynamicDialog' },
            { label: 'OverlayPanel' },
            { label: 'Sidebar' },
            { label: 'Tooltip' }
          ]
      },
      {
        label: 'Files',
        items:
          [
            { label: 'Upload' }
          ]
      },
      {
        label: 'Menu',
        items:
          [
            { label: 'Breadcrumb' },
            { label: 'ContextMenu' },
            { label: 'Dock' },
            { label: 'Menu' },
            { label: 'Menubar' },
            { label: 'MegaMenu' },
            { label: 'PanelMenu' },
            { label: 'Steps' },
            { label: 'TabMenu' },
            { label: 'TieredMenu' }
          ]
      },
      {
        label: 'Chart',
        items:
          [
            { label: 'Chart.js' }
          ]
      },
      {
        label: 'Messages',
        items:
          [
            { label: 'Messages' },
            { label: 'Toast' },
          ]
      },
      {
        label: 'Media',
        items:
          [
            { label: 'Carousel' },
            { label: 'Galleria' },
            { label: 'Image' },
          ]
      },
      {
        label: 'Drag & Drop',
        items:
          [
            { label: 'Drag & Drop' },
          ]
      },
      {
        label: 'Misc',
        items:
          [
            { label: 'Avatar' },
            { label: 'Badge' },
            { label: 'BlockUI' },
            { label: 'Chip' },
            { label: 'Inplace' },
            { label: 'MeterGroup' },
            { label: 'ScrollTop' },
            { label: 'Skeleton' },
            { label: 'ProgressBar' },
            { label: 'ProgressSpinner' },
            { label: 'Tag' },
            { label: 'Terminal' }
          ]
      },
      {
        label: 'Directives',
        items:
          [
            { label: 'Defer' },
            { label: 'FocusTrap' },
            { label: 'StyleClass' },
            { label: 'Ripple' },
            { label: 'AutoFocus' },
            { label: 'AnimateOnScroll' }
          ]
      },
      {
        label: 'Utilities',
        items:
          [
            { label: 'FilterService' },
          ]
      },
    ];
  }
}
