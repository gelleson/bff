import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './forms/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './forms/registration/registration.component';
import { AccountListComponent } from './desktop/account/account-list/account-list.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzListModule } from 'ng-zorro-antd/list';
import { TransactionTableComponent } from './desktop/transaction/transaction-table/transaction-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NewAccountComponent } from './desktop/account/new-account/new-account.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { EditAccountComponent } from './desktop/account/edit-account/edit-account.component';
import { NewTransactionComponent } from './desktop/transaction/new-transaction/new-transaction.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzButtonModule,
    NzTypographyModule,
    NzIconModule,
    RouterModule,
    NzEmptyModule,
    NzListModule,
    NzTableModule,
    NzBadgeModule,
    NzDrawerModule,
    NzSelectModule,
    NzMessageModule,
    NzPopconfirmModule,
    NzDatePickerModule
  ],
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AccountListComponent,
    TransactionTableComponent,
    NewAccountComponent,
    EditAccountComponent,
    NewTransactionComponent
  ],
  exports: [
    LoginComponent,
    RegistrationComponent,
    AccountListComponent,
    TransactionTableComponent,
    EditAccountComponent,
    NewTransactionComponent
  ]
})
export class SharedModule {}
