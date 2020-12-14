import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { SharedModule } from '@bff/shared';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { UIModule } from '@bff/frontend/ui';


@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    NzButtonModule,
    UIModule
  ]
})
export class AccountModule { }
