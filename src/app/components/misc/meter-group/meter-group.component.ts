import { Component } from '@angular/core';

@Component({
  selector: 'app-meter-group',
  templateUrl: './meter-group.component.html',
  styleUrl: './meter-group.component.scss'
})
export class MeterGroupComponent {
  value = [
    { label: 'Space used', value: 15, color: '#34d399' }
  ];
  values = [
    { label: 'Apps', color: '#34d399', value: 16, icon: 'pi pi-table' },
    { label: 'Messages', color: '#fbbf24', value: 8, icon: 'pi pi-inbox' },
    { label: 'Media', color: '#60a5fa', value: 24, icon: 'pi pi-image' },
    { label: 'System', color: '#c084fc', value: 10, icon: 'pi pi-cog' }
  ];
}
