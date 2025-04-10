import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AutoCompleteModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    AutoCompleteModule,
    FormsModule
  ]
})
export class ImportModule { }
