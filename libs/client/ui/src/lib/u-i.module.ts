import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { NewAccountComponent } from './account/new-account/new-account.component';
import { EditAccountComponent } from './account/edit-account/edit-account.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { RouterModule } from '@angular/router';
import { AccountCardListComponent } from './account/account-card-list/account-card-list.component';

@NgModule({
  imports: [
    CommonModule,
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
    NzPopconfirmModule,
    NzMessageModule,
    RouterModule,
  ],
  declarations: [
    BalanceShortComponent,
    SubscriptionListComponent,
    NewTransactionComponent,
    TransactionTableComponent,
    NewAccountComponent,
    EditAccountComponent,
    AccountListComponent,
    LoginComponent,
    RegistrationComponent,
    AccountCardListComponent,
  ],
  exports: [
    BalanceShortComponent,
    SubscriptionListComponent,
    NewTransactionComponent,
    TransactionTableComponent,
    NewAccountComponent,
    EditAccountComponent,
    AccountListComponent,
    LoginComponent,
    RegistrationComponent,
    AccountCardListComponent
  ]
})
export class UIModule {}
