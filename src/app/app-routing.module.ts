import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children:
      [
        { path: 'form', loadChildren: () => import('./components/form/form.module').then(mod => mod.FormModule), },
        { path: 'button', loadChildren: () => import('./components/button/button.module').then(mod => mod.ButtonModule), }
      ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
