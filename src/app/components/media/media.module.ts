import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { GalleriaComponent } from './galleria/galleria.component';
import { ImageComponent } from './image/image.component';
import { ImportModule } from '../../common/import.module';
import { MediaRoutingModule } from './media-routing.module';



@NgModule({
  declarations: [
    CarouselComponent,
    GalleriaComponent,
    ImageComponent
  ],
  imports: [
    ImportModule,
    MediaRoutingModule
  ]
})
export class MediaModule { }
