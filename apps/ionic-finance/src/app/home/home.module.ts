import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { UIModule } from '@bff/client/ui';
import { ClientSharedModule } from '@bff/client/shared';
import { TransactionOverviewComponent } from './components/transaction-overview/transaction-overview.component';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UIModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    NzTypographyModule,
    ClientSharedModule,
    NzCardModule
  ],
  declarations: [HomePage, TransactionOverviewComponent],
})
export class HomePageModule {}
