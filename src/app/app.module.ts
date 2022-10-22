import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MobileService} from "./mobile.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {NavigationComponent} from "./navigation.component";
import {RoutingModule} from "./routing.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule
  ],
  providers: [MobileService],
  bootstrap: [NavigationComponent]
})
export class AppModule { }
