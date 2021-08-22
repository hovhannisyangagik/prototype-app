import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Contacts } from '@ionic-native/contacts';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts/contacts.component';
import { ListComponent } from './contacts/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Contacts,
    BackgroundMode, WebView
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
