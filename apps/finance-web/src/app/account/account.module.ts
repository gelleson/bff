import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { UIModule } from '@bff/client/ui';


@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    NzButtonModule,
    UIModule,
  ]
})
export class AccountModule { }
