import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AutoparkComponent } from './components/autopark/autopark.component';
import { AutoserviceComponent } from './components/autoservice/autoservice.component';
import { HomeComponent } from './components/home/home.component';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { FormsModule } from '@angular/forms';
import { OrderModalComponent } from './components/home/order-modal/order-modal.component';

const mapConfig: YaConfig = {
  apikey: "7eb3e9e2-e56e-487b-84bf-5d8710ff164d",
  lang: "ru_RU"
};

@NgModule({
  declarations: [AppComponent, ContactsComponent, AutoparkComponent, AutoserviceComponent, HomeComponent, OrderModalComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,  AngularYandexMapsModule.forRoot(mapConfig), FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
