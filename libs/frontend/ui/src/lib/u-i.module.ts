import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountModule } from './account/account.module';
import { BalanceShortComponent } from './overview/balance-short/balance-short.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';

@NgModule({
  imports: [
    CommonModule,
    AccountModule,
    NzTypographyModule,
    NzGridModule,
    NzStatisticModule
  ],
  declarations: [BalanceShortComponent],
  exports: [
    BalanceShortComponent
  ]
})
export class UIModule {}
