import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibHomeModule } from 'lib-home';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibHomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
