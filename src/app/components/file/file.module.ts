import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload/upload.component';
import { ImportModule } from '../../common/import.module';
import { FileRoutingModule } from './file-routing.module';
import { MessageService, PrimeNGConfig } from 'primeng/api';



@NgModule({
  declarations: [
    UploadComponent
  ],
  imports: [
    ImportModule,
    FileRoutingModule
  ],
  providers: [MessageService, PrimeNGConfig]
})
export class FileModule { }
