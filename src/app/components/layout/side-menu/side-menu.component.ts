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
            { label: 'Accordion', command: () => { this.router.navigate(["/panel/accordion"]) } },
            { label: 'Card', command: () => { this.router.navigate(["/panel/card"]) } },
            { label: 'Divider', command: () => { this.router.navigate(["/panel/divider"]) } },
            { label: 'Fieldset', command: () => { this.router.navigate(["/panel/fieldset"]) } },
            { label: 'Panel', command: () => { this.router.navigate(["/panel/panel"]) } },
            { label: 'Splitter', command: () => { this.router.navigate(["/panel/splitter"]) } },
            { label: 'Stepper', command: () => { this.router.navigate(["/panel/stepper"]) } },
            { label: 'ScrollPanel', command: () => { this.router.navigate(["/panel/scroll-panel"]) } },
            { label: 'TabView', command: () => { this.router.navigate(["/panel/tab-view"]) } },
            { label: 'Toolbar', command: () => { this.router.navigate(["/panel/toolbar"]) } }
          ]
      },
      {
        label: 'Overlay',
        items:
          [
            { label: 'ConfirmDialog', command: () => { this.router.navigate(["/overlay/confirm-dialog"]) } },
            { label: 'ConfirmPopup', command: () => { this.router.navigate(["/overlay/confirm-popup"]) } },
            { label: 'Dialog', command: () => { this.router.navigate(["/overlay/dialog"]) } },
            { label: 'DynamicDialog', command: () => { this.router.navigate(["/overlay/dynamic-dialog"]) } },
            { label: 'OverlayPanel', command: () => { this.router.navigate(["/overlay/overlay-panel"]) } },
            { label: 'Sidebar', command: () => { this.router.navigate(["/overlay/sider-bar"]) } },
            { label: 'Tooltip', command: () => { this.router.navigate(["/overlay/tooltip"]) } }
          ]
      },
      {
        label: 'Files',
        items:
          [
            { label: 'Upload', command: () => { this.router.navigate(["/file/upload"]) } }
          ]
      },
      {
        label: 'Menu',
        items:
          [
            { label: 'Breadcrumb', command: () => { this.router.navigate(["/menu/bread-crumd"]) } },
            { label: 'ContextMenu', command: () => { this.router.navigate(["/menu/context-menu"]) } },
            { label: 'Dock', command: () => { this.router.navigate(["/menu/dock"]) } },
            { label: 'Menu', command: () => { this.router.navigate(["/menu/menu"]) } },
            { label: 'Menubar', command: () => { this.router.navigate(["/menu/menu-bar"]) } },
            { label: 'MegaMenu', command: () => { this.router.navigate(["/menu/mega-menu"]) } },
            { label: 'PanelMenu', command: () => { this.router.navigate(["/menu/panel-menu"]) } },
            { label: 'Steps', command: () => { this.router.navigate(["/menu/steps"]) } },
            { label: 'TabMenu', command: () => { this.router.navigate(["/menu/tab-menu"]) } },
            { label: 'TieredMenu', command: () => { this.router.navigate(["/menu/tiered-menu"]) } }
          ]
      },
      {
        label: 'Chart',
        items:
          [
            { label: 'Chart.js', command: () => { this.router.navigate(["/chart"]) } }
          ]
      },
      {
        label: 'Messages',
        items:
          [
            { label: 'Messages', command: () => { this.router.navigate(["/messages/messages"]) } },
            { label: 'Toast', command: () => { this.router.navigate(["/messages/toast"]) } },
          ]
      },
      {
        label: 'Media',
        items:
          [
            { label: 'Carousel', command: () => { this.router.navigate(["/media/carousel"]) } },
            { label: 'Galleria', command: () => { this.router.navigate(["/media/galleria"]) } },
            { label: 'Image', command: () => { this.router.navigate(["/media/image"]) } },
          ]
      },
      {
        label: 'Drag & Drop',
        items:
          [
            { label: 'Drag & Drop', command: () => { this.router.navigate(["/drag-drop"]) } },
          ]
      },
      {
        label: 'Misc',
        items:
          [
            { label: 'Avarta', command: () => { this.router.navigate(["/misc/avarta"]) } },
            { label: 'Badge', command: () => { this.router.navigate(["/misc/badge"]) } },
            { label: 'BlockUI', command: () => { this.router.navigate(["/misc/block-ui"]) } },
            { label: 'Chip', command: () => { this.router.navigate(["/misc/chip"]) } },
            { label: 'Inplace', command: () => { this.router.navigate(["/misc/in-place"]) } },
            { label: 'MeterGroup', command: () => { this.router.navigate(["/misc/meter-group"]) } },
            { label: 'ScrollTop', command: () => { this.router.navigate(["/misc/scroll-top"]) } },
            { label: 'Skeleton', command: () => { this.router.navigate(["/misc/skeleton"]) } },
            { label: 'ProgressBar', command: () => { this.router.navigate(["/misc/progress-bar"]) } },
            { label: 'ProgressSpinner', command: () => { this.router.navigate(["/misc/progress-spinner"]) } },
            { label: 'Tag', command: () => { this.router.navigate(["/misc/tag"]) } },
            { label: 'Terminal', command: () => { this.router.navigate(["/misc/terminal"]) } }
          ]
      },
      {
        label: 'Directives',
        items:
          [
            { label: 'Defer', command: () => { this.router.navigate(["/directives/defer"]) } },
            { label: 'FocusTrap', command: () => { this.router.navigate(["/directives/focus-trap"]) } },
            { label: 'StyleClass', command: () => { this.router.navigate(["/directives/style-class"]) } },
            { label: 'Ripple', command: () => { this.router.navigate(["/directives/ripple"]) } },
            { label: 'AutoFocus', command: () => { this.router.navigate(["/directives/auto-focus"]) } },
            { label: 'AnimateOnScroll', command: () => { this.router.navigate(["/directives/animate-on-scroll"]) } }
          ]
      },
      {
        label: 'Utilities',
        items:
          [
            { label: 'FilterService', command: () => { this.router.navigate(["/utilities"]) } },
          ]
      },
    ];
  }
}
