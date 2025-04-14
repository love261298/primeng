import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { GalleriaComponent } from './galleria/galleria.component';
import { ImageComponent } from './image/image.component';

const routes: Routes = [
  { path: 'carousel', component: CarouselComponent },
  { path: 'galleria', component: GalleriaComponent },
  { path: 'image', component: ImageComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MediaRoutingModule { }
