import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import("./components/layout/layout.module").then(m => m.LayoutModule)
  },
  {
    path: 'form',
    loadChildren: () =>
      import("./components/form/form.module").then(m => m.FormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
