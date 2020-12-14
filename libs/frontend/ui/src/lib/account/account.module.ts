import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAccountComponent } from './new-account/new-account.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { AccountListComponent } from './account-list/account-list.component';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';



@NgModule({
  declarations: [
    NewAccountComponent,
    EditAccountComponent,
    AccountListComponent,
  ],
  exports: [
    NewAccountComponent,
    EditAccountComponent,
    AccountListComponent,
  ],
  imports: [
    CommonModule,
    NzBadgeModule,
    NzEmptyModule,
    NzListModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzDrawerModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule
  ]
})
export class AccountModule { }
