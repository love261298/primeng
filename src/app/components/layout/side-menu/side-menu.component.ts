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
            { label: 'CascadeSelect', command: () => { this.router.navigate(["/form/cascade-select"]) } },
            { label: 'Checkbox', command: () => { this.router.navigate(["/form/check-box"]) } },
            { label: 'Chips', command: () => { this.router.navigate(["/form/chips"]) } },
            { label: 'ColorPicker', command: () => { this.router.navigate(["/form/color-picker"]) } },
            { label: 'Dropdown', command: () => { this.router.navigate(["/form/dropdown"]) } },
            { label: 'Editor', command: () => { this.router.navigate(["/form/editor"]) } },
            { label: 'FloatLabel', command: () => { this.router.navigate(["/form/float-label"]) } },
            { label: 'IconField', command: () => { this.router.navigate(["/form/icon-field"]) } },
            { label: 'InputGroup', command: () => { this.router.navigate(["/form/input-group"]) } },
            { label: 'InputMask', command: () => { this.router.navigate(["/form/input-mask"]) } },
            { label: 'InputSwitch', command: () => { this.router.navigate(["/form/input-switch"]) } },
            { label: 'InputText', command: () => { this.router.navigate(["/form/input-text"]) } },
            { label: 'InputTextarea', command: () => { this.router.navigate(["/form/input-text-area"]) } },
            { label: 'InputNumber', command: () => { this.router.navigate(["/form/input-number"]) } },
            { label: 'InputOtp', command: () => { this.router.navigate(["/form/input-otp"]) } },
            { label: 'Knob', command: () => { this.router.navigate(["/form/knob"]) } },
            { label: 'KeyFilter', command: () => { this.router.navigate(["/form/key-filter"]) } },
            { label: 'Listbox', command: () => { this.router.navigate(["/form/list-box"]) } },
            { label: 'MultiSelect', command: () => { this.router.navigate(["/form/multi-select"]) } },
            { label: 'Password', command: () => { this.router.navigate(["/form/password"]) } },
            { label: 'RadioButton', command: () => { this.router.navigate(["/form/radio-button"]) } },
            { label: 'Rating', command: () => { this.router.navigate(["/form/rating"]) } },
            { label: 'SelectButton', command: () => { this.router.navigate(["/form/select-button"]) } },
            { label: 'Slider', command: () => { this.router.navigate(["/form/slider"]) } },
            { label: 'TreeSelect', command: () => { this.router.navigate(["/form/tree-select"]) } },
            { label: 'TriStateCheckbox', command: () => { this.router.navigate(["/form/tri-state-check-box"]) } },
            { label: 'ToggleButton', command: () => { this.router.navigate(["/form/toggle-button"]) } }
          ]
      },
      {
        label: 'Button',
        items:
          [
            { label: 'Button', command: () => { this.router.navigate(["/button/button"]) } },
            { label: 'SplitButton', command: () => { this.router.navigate(["/button/split-button"]) } },
            { label: 'Speed Dial', command: () => { this.router.navigate(["/button/speed-dial"]) } },
          ]
      },
      {
        label: 'Data',
        items:
          [
            { label: 'DataView', command: () => { this.router.navigate(["/data/data-view"]) } },
            { label: 'OrderList', command: () => { this.router.navigate(["/data/order-list"]) } },
            { label: 'Org Chart', command: () => { this.router.navigate(["/data/org-chart"]) } },
            { label: 'Paginator', command: () => { this.router.navigate(["/data/paginator"]) } },
            { label: 'PickList', command: () => { this.router.navigate(["/data/pick-list"]) } },
            { label: 'Scroller', command: () => { this.router.navigate(["/data/scroller"]) } },
            { label: 'Table', command: () => { this.router.navigate(["/data/table"]) } },
            { label: 'Timeline', command: () => { this.router.navigate(["/data/time-line"]) } },
            { label: 'Tree', command: () => { this.router.navigate(["/data/tree"]) } },
            { label: 'TreeTable', command: () => { this.router.navigate(["/data/tree-table"]) } }
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
