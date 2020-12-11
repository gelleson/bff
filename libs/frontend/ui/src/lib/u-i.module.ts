import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountModule } from './account/account.module';
import { BalanceShortComponent } from './overview/balance-short/balance-short.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { SubscriptionListComponent } from './subscription/subscription-list/subscription-list.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@NgModule({
  imports: [
    CommonModule,
    AccountModule,
    NzTypographyModule,
    NzGridModule,
    NzStatisticModule,
    NzListModule,
    NzBadgeModule
  ],
  declarations: [BalanceShortComponent, SubscriptionListComponent],
  exports: [
    BalanceShortComponent,
    SubscriptionListComponent
  ]
})
export class UIModule {}
