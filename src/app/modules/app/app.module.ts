import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { SwButtonComponent } from "ngx-simple-widgets";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule, BrowserModule,
    SwButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
