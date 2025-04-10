import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportModule } from './common/import.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    ImportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
