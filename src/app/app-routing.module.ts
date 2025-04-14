import { MenuModule } from 'primeng/menu';
import { FileModule } from './components/file/file.module';
import { OverlayModule } from './components/overlay/overlay.module';
import { PanelModule } from './components/panel/panel.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children:
      [
        { path: 'form', loadChildren: () => import('./components/form/form.module').then(mod => mod.FormModule), },
        { path: 'button', loadChildren: () => import('./components/button/button.module').then(mod => mod.ButtonModule), },
        { path: 'data', loadChildren: () => import('./components/data/data.module').then(mod => mod.DataModule), },
        { path: 'panel', loadChildren: () => import('./components/panel/panel.module').then(mod => mod.PanelModule), },
        { path: 'overlay', loadChildren: () => import('./components/overlay/overlay.module').then(mod => mod.OverlayModule), },
        { path: 'file', loadChildren: () => import('./components/file/file.module').then(mod => mod.FileModule), },
        { path: 'menu', loadChildren: () => import('./components/menu/menu.module').then(mod => mod.MenuModule), },
      ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
