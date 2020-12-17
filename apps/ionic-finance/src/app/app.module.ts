import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { MobileCoreModule } from '@bff/mobile/core';
import { HttpClientModule } from '@angular/common/http';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { CoreModule } from '@bff/frontend/core';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AkitaNgDevtools.forRoot(),
    MobileCoreModule.forRoot({
      baseUrl: 'http://localhost:3333/api'
    }),
    CoreModule.forRoot({
      url: 'http://localhost:3333/api'
    }),
    NzTypographyModule,
    NzDrawerModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
