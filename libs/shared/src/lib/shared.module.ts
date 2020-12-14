import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../../frontend/ui/src/lib/auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from '../../../frontend/ui/src/lib/auth/registration/registration.component';
import { AccountListComponent } from '../../../frontend/ui/src/lib/account/account-list/account-list.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NewAccountComponent } from '../../../frontend/ui/src/lib/account/new-account/new-account.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { EditAccountComponent } from '../../../frontend/ui/src/lib/account/edit-account/edit-account.component';
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
  ],
  exports: [

  ]
})
export class SharedModule {}
