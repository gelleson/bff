import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AuthGuard, BearerInterceptor, CoreModule } from '@bff/frontend/core';
import { environment } from '../environments/environment';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: '',
        loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'accounts',
        loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
        canActivate: [AuthGuard]
      }
    ], { initialNavigation: 'enabled' }),
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    NzTypographyModule,
    NzAvatarModule,
    NzSpaceModule,
    HttpClientModule,
    NzIconModule,
    BrowserAnimationsModule,
    AkitaNgDevtools.forRoot(),
    CoreModule.forRoot({
      url: environment.api
    }),
    NzDropDownModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BearerInterceptor,
      multi: true
    },
    {
      provide: NZ_I18N,
      useValue: en_US
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
