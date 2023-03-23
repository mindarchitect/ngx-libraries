import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxAvatarLibTestComponent } from './ngx-avatar-lib-test/ngx-avatar-lib-test.component';
import {NgxAvatarLibModule} from "ngx-avatar-lib";

@NgModule({
  declarations: [
    AppComponent,
    NgxAvatarLibTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxAvatarLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
