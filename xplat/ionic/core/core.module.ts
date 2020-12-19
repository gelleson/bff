import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { throwIfAlreadyLoaded } from '@bff/utils';
import { BffCoreModule } from '@bff/web';

@NgModule({
  imports: [BffCoreModule, IonicModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
})
export class BffIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: BffIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'BffIonicCoreModule');
  }
}
