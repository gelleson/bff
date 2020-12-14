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
import { NewTransactionComponent } from './transaction/new-transaction/new-transaction.component';
import { TransactionTableComponent } from './transaction/transaction-table/transaction-table.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';

@NgModule({
  imports: [
    CommonModule,
    AccountModule,
    NzTypographyModule,
    NzGridModule,
    NzStatisticModule,
    NzListModule,
    NzBadgeModule,
    NzDrawerModule,
    ReactiveFormsModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzButtonModule,
    NzFormModule,
    NzTableModule,
    NzPopconfirmModule
  ],
  declarations: [
    BalanceShortComponent,
    SubscriptionListComponent,
    NewTransactionComponent,
    TransactionTableComponent
  ],
  exports: [
    BalanceShortComponent,
    SubscriptionListComponent,
    NewTransactionComponent,
    TransactionTableComponent
  ]
})
export class UIModule {}
